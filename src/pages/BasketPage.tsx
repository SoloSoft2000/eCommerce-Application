import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Cart } from '@commercetools/platform-sdk';
import getCart from '../utils/sdk/basket/getCart';
import BasketItemCard from '../сomponents/basket/BasketItemCard';
import PromoInputForm from '../сomponents/basket/PromoInputForm';
import ToCatalogLink from '../сomponents/basket/ToCatalogLink';
import ClearCartButton from '../сomponents/basket/ClearCartButton';
import NotificationContext from '../utils/notification/NotificationContext';
import deleteCart from '../utils/sdk/basket/deleteCart';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import getDiscountById from '../utils/sdk/basket/getDiscountById';

function BasketPage(): React.JSX.Element {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const showNotification = useContext(NotificationContext);
  const [totalPrice, setTotalCart] = useState<number>(0);
  const [discountCodes, setDiscountCodes] = useState<string[]>([]);

  useEffect(() => {
    async function getBasketCart(): Promise<void> {
      try {
        const fetchedCart: Cart = await getCart();
        setCart(fetchedCart);
        setTotalCart(fetchedCart.totalPrice.centAmount / 100);
      } catch (error) {
        showNotification('The basket is empty', 'default');
      } finally {
        setIsLoading(false);
      }
    }

    getBasketCart();
  }, [setCart, setTotalCart, setIsLoading]);

  useEffect(() => {
    if (cart?.discountCodes) {
      const promises = cart.discountCodes.map((discount) =>
        getDiscountById(discount.discountCode.id).then((data) => data.code)
      );

      Promise.all(promises)
        .then((codes) => {
          setDiscountCodes(codes);
        })
        .catch(() => {
          showNotification('Failed to get discount codes:', 'error');
          setDiscountCodes([]);
        });
    } else {
      setDiscountCodes([]);
    }
  }, [cart]);

  const removeFromCart = useCallback(
    async (itemId: string): Promise<void> => {
      try {
        await updateQuantity('changeLineItemQuantity', itemId, 0);
        const updatedCart = await getCart();
        setCart(updatedCart);
        showNotification('Removed from cart', 'success');
        setTotalCart(updatedCart.totalPrice.centAmount / 100);
      } catch (error) {
        showNotification('Error removing product from cart', 'error');
      }
    },
    [setCart, setTotalCart]
  );

  const updateCartTotal = useCallback(async (): Promise<void> => {
    try {
      const updatedCart = await getCart();
      setCart(updatedCart);
      setTotalCart(updatedCart.totalPrice.centAmount / 100);
    } catch (error) {
      showNotification('Error updating cart total', 'error');
    }
  }, [setCart, setTotalCart]);

  const clearCart = useCallback((): void => {
    if (cart) {
      deleteCart(cart)
        .then(() => {
          setCart(null);
          setTotalCart(0);
          localStorage.removeItem('CT-Cart-CustomerID');
          showNotification('The cart is cleared', 'success');
        })
        .catch((err) => {
          showNotification(err, 'error');
        });
    }
  }, [cart, setCart, setTotalCart]);

  const handlePromoApplied = useCallback(async (): Promise<void> => {
    try {
      const updatedCart = await getCart();
      setCart(updatedCart);
      setTotalCart(updatedCart.totalPrice.centAmount / 100);
    } catch (error) {
      showNotification('Error updating cart after applying promo', 'error');
    }
  }, [setCart, setTotalCart]);

  let cartContent;
  if (isLoading) {
    cartContent = <p>Loading...</p>;
  } else if (cart && cart.lineItems.length > 0) {
    cartContent = (
      <>
        {cart.lineItems.map((lineItem) => (
          <BasketItemCard
            key={lineItem.id}
            lineItem={lineItem}
            removeFromCart={removeFromCart}
            updateCartTotal={updateCartTotal}
          />
        ))}
      </>
    );
  } else {
    cartContent = (
      <>
        <p className="text-2xl font-bold pt-12 text-center">
          The Shopping Cart is empty
        </p>
        <p className="text-xl pt-10 text-center mb-8">
          Let's start shopping and ...
        </p>
        <ToCatalogLink />
      </>
    );
  }

  return (
    <main className="container mx-auto">
      <h2 className="text-2xl font-bold pt-12 text-center">Shopping Cart</h2>
      <div className="flex mt-8 max-lg:flex-col">
        <div className="border min-h-[70%] w-1/2 max-lg:w-full max-lg:m-2">
          {cartContent}
        </div>
        <div className="border h-[30%] w-1/2 ml-10 max-lg:w-full max-xl:ml-2 max-lg:mt-2 max-lg:mb-3">
          <h4 className="font-bold text-center text-xl mb-8 mt-3">
            Cart Totals
          </h4>
          <PromoInputForm onPromoApplied={handlePromoApplied} />
          <div>
            <ul>
              {discountCodes.map((code, index) => (
                <li key={index}>{code}</li>
              ))}
            </ul>
          </div>
          <div className="flex max-md:flex-col justify-center mb-5">
            <div className="flex w-full ml-[5%] mb-2">
              <p className="max-lg:text-sm text-xl text-slate-800 font-bold pr-1">
                Total:
              </p>
              <p className="max-lg:text-sm text-xl font-bold px-1 max-md:px-0">
                $ {totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="w-1/3 mr-[5%] max-sm:ml-4">
              <ClearCartButton isCartEmpty={!cart} onClick={clearCart} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BasketPage;
