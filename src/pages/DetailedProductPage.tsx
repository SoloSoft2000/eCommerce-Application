import React from 'react';
import Img from '../assets/images/img-01.png';

function ProductPage(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">Detailed Product</h3>
      <img className="mx-auto w-1/2 m-8" src={Img} alt="main picture" />
    </main>
  );
}

export default ProductPage;
