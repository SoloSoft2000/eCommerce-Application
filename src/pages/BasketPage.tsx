import React from 'react';
import Img from '../assets/images/img-04.png';
import getCart from '../utils/sdk/basket/getCart';
import BasketItemCard from '../сomponents/basket/BasketItemCard';
import PromoInputForm from '../сomponents/basket/PromoInputForm';

function BasketPage(): React.JSX.Element {
  async function getBasketCart() {
    try {
      const cart = await getCart();
      console.log(cart);
    } catch (error) {
      console.error('The Shopping Cart is empty!', error);
    }
  }
  
  getBasketCart();

  return (
    <main className="container mx-auto">
      <h2 className="text-2xl font-bold pt-12 text-center">Shopping Cart</h2>
      <div className='flex mt-8'>
        <div className='border h-[70%] w-1/2'>
          <BasketItemCard />
          <BasketItemCard />
          <BasketItemCard />
        </div>
        <div className='border h-[30%] w-1/2 ml-10'>
          <h4 className="font-bold text-center text-xl mb-8 mt-3">Cart Totals</h4>
          <PromoInputForm />
          <div className="flex max-md:flex-col justify-center">
            <div className='flex w-full ml-[5%] mb-2'>
              <p className="max-lg:text-sm text-xl text-slate-800 font-bold pr-1">
                Total:
              </p>
              <p className="max-lg:text-sm text-xl font-bold px-1 max-md:px-0">
                100 $
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="mx-auto w-1/2 m-8" src={Img} alt="main picture" /> */}
    </main>
  );
}

export default BasketPage;
