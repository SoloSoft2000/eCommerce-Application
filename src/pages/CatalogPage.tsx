import React from 'react';
import Img1 from '../assets/images/img-01.png';
import Img2 from '../assets/images/img-02.png';
import Img3 from '../assets/images/img-03.png';
import Img4 from '../assets/images/img-04.png';

function CatalogPage(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">Catalog product</h3>
      <div className="flex flex-wrap">
        <img className="mx-auto w-2/5 m-8" src={Img1} alt="main picture" />
        <img className="mx-auto w-2/5 m-8" src={Img2} alt="main picture" />
        <img className="mx-auto w-2/5 m-8" src={Img3} alt="main picture" />
        <img className="mx-auto w-2/5 m-8" src={Img4} alt="main picture" />
      </div>
    </main>
  );
}

export default CatalogPage;
