import React from 'react';
import MainCategoryCover from './MainCategoryCover';
import Img1 from '../assets/images/img-01.png';
import Img2 from '../assets/images/img-02.png';
import Img3 from '../assets/images/img-03.png';
import Img4 from '../assets/images/img-04.png';

function Main(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <div className="py-10 md:py-20 text-center font-bold">
        <h1 className="text-2xl text-amber-600 mb-6">
          Sparkle and Shine: Unforgettable Jewelry Designs
        </h1>
        <h2 className="text-xl">
          Discover a world of possibilities in our store
        </h2>
      </div>

      <div className="flex justify-around items-center flex-wrap gap-8 md:gap-y-14 py-8">
        <MainCategoryCover img={Img3} path={'all'} name={'All'} />
        <MainCategoryCover img={Img1} path={'rings'} name={'Rings'} />
        <MainCategoryCover img={Img2} path={'earrings'} name={'Earrings'} />
        <MainCategoryCover img={Img4} path={'necklace'} name={'Necklaces'} />
      </div>
    </main>
  );
}

export default Main;
