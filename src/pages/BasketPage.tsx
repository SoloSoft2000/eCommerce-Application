import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Cart } from '@commercetools/platform-sdk';
import { TiDelete } from 'react-icons/ti';
import getCart from '../utils/sdk/basket/getCart';
import BasketItemCard from '../сomponents/basket/BasketItemCard';
import PromoInputForm from '../сomponents/basket/PromoInputForm';
import ToCatalogLink from '../сomponents/basket/ToCatalogLink';
import ClearCartButton from '../сomponents/basket/ClearCartButton';
import NotificationContext from '../utils/notification/NotificationContext';
import deleteCart from '../utils/sdk/basket/deleteCart';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import getDiscountById from '../utils/sdk/basket/getDiscountById';
import cancelDiscount from '../utils/sdk/basket/cancelDiscount';

function BasketPage(): React.JSX.Element {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const showNotification = useContext(NotificationContext);
  const [totalPrice, setTotalCart] = useState<number>(0);
  const [discountCodes, setDiscountCodes] = useState<
    { id: string; code: string }[]
  >([]);

  const emptyCart: boolean = !cart || cart.lineItems.length === 0;

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
        getDiscountById(discount.discountCode.id).then((data) => ({
          id: discount.discountCode.id,
          code: data.code,
        }))
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

  const clearCart = useCallback(async (): Promise<void> => {
    const fetchedCart: Cart = await getCart();
    if (fetchedCart) {
      deleteCart(fetchedCart)
        .then(() => {
          setCart(null);
          setTotalCart(0);
          showNotification('The cart is cleared', 'success');
        })
        .catch((err) => {
          showNotification(err, 'error');
        });
    }
  }, [setCart, setTotalCart]);

  const removeFromCart = useCallback(
    async (itemId: string): Promise<void> => {
      try {
        await updateQuantity('changeLineItemQuantity', itemId, 0);
        const updatedCart = await getCart();
        setCart(updatedCart);
        showNotification('Removed from cart', 'success');
        setTotalCart(updatedCart.totalPrice.centAmount / 100);
        if (updatedCart.lineItems.length === 0) {
          clearCart();
        }
      } catch (error) {
        showNotification('Error removing product from cart', 'error');
      }
    },
    [setCart, setTotalCart, clearCart]
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

  const cancelPromo = useCallback(
    (discountId: string) => {
      cancelDiscount(discountId)
        .then((data) => {
          setCart(data);
          setTotalCart(data.totalPrice.centAmount / 100);
          showNotification('Promocode canceled', 'success');
        })
        .catch(() => {
          showNotification('Failed in promocode cancel', 'error');
        });
    },
    [setCart, setTotalCart]
  );

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
          <PromoInputForm onPromoApplied={handlePromoApplied} isCartEmpty={emptyCart} />
          {discountCodes.length > 0 && (
            <div className="border ml-5 mr-5 mb-5 p-5 shadow-md">
              <ul className="list-decimal pl-5 space-y-2">
                {discountCodes.map((code, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {code.code}
                    </span>
                    <TiDelete
                      className="cursor-pointer hover:text-red-600"
                      onClick={(): void => cancelPromo(code.id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
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
              <ClearCartButton isCartEmpty={emptyCart} onClick={(): void => {
                if (confirm('Are you sure?')) clearCart() // eslint-disable-line
              }} />
            </div>
          </div>
          <div className="ml-[33.3%] max-sm:ml-[15%] mb-5">
            <button
              className={`w-1/2 max-sm:w-5/6 text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm ${
                emptyCart
                  ? 'bg-gray-300 text-white cursor-not-allowed'
                  : 'hover:bg-slate-600 cursor-pointer'
              }`}
              disabled={emptyCart}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BasketPage;
