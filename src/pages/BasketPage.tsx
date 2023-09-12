import React, { useState, useEffect, useContext } from 'react';
import { Cart } from '@commercetools/platform-sdk';
import getCart from '../utils/sdk/basket/getCart';
import BasketItemCard from '../сomponents/basket/BasketItemCard';
import PromoInputForm from '../сomponents/basket/PromoInputForm';
import ToCatalogLink from '../сomponents/basket/ToCatalogLink';
import ClearCartButton from '../сomponents/basket/ClearCartButton';
import NotificationContext from '../utils/notification/NotificationContext';

function BasketPage(): React.JSX.Element {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const showNotification = useContext(NotificationContext);

  useEffect(() => {
    async function getBasketCart(): Promise<void> {
      try {
        const fetchedCart: Cart = await getCart();
        setCart(fetchedCart);
        console.log(cart);
      } catch (error) {
        showNotification('The basket is empty', 'error');
      } finally {
        setIsLoading(false);
      }
    }
    getBasketCart();
  }, []);

  let cartContent;
  if (isLoading) {
    cartContent = <p>Loading...</p>;
  } else if (cart) {
    cartContent = (
      <>
        <BasketItemCard />
        <BasketItemCard />
        <BasketItemCard />
        <BasketItemCard />
        <BasketItemCard />
        <BasketItemCard />
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
        <div className="border h-[30%] w-1/2 ml-10 max-lg:w-full max-lg:ml-0 max-lg:mt-2 max-lg:m-2">
          <h4 className="font-bold text-center text-xl mb-8 mt-3">
            Cart Totals
          </h4>
          <PromoInputForm />
          <div className="flex max-md:flex-col justify-center mb-5">
            <div className="flex w-full ml-[5%] mb-2">
              <p className="max-lg:text-sm text-xl text-slate-800 font-bold pr-1">
                Total:
              </p>
              <p className="max-lg:text-sm text-xl font-bold px-1 max-md:px-0">
                100 $
              </p>
            </div>
            <div className="w-1/3 mr-[5%]">
              <ClearCartButton isCartEmpty={!cart} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BasketPage;
