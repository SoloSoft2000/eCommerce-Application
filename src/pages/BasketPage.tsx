import React from 'react';
import Img from '../assets/images/img-04.png';
import getCart from '../utils/sdk/basket/getCart';

function BasketPage(): React.JSX.Element {
  getCart().then(console.log).catch(console.error);

  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">Basket</h3>
      <img className="mx-auto w-1/2 m-8" src={Img} alt="main picture" />
    </main>
  );
}

export default BasketPage;
