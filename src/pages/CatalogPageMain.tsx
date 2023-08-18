import React from 'react';
import CategoryCover from '../сomponents/catalog/CategoryCover';
import Img1 from '../assets/images/img-01.png';
import Img2 from '../assets/images/img-02.png';
import Img3 from '../assets/images/img-03.png';
import Img4 from '../assets/images/img-04.png';

function CatalogPageMain(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">Catalog product</h3>
      <div className="flex justify-around items-center flex-wrap gap-8 md:gap-y-14 py-8">
        <CategoryCover img={Img3} path={'all'} name={'All'} />
        <CategoryCover img={Img1} path={'rings'} name={'Rings'} />
        <CategoryCover img={Img2} path={'earrings'} name={'Earrings'} />
        <CategoryCover img={Img4} path={'necklace'} name={'Necklace'} />
      </div>
    </main>
  );
}

export default CatalogPageMain;
