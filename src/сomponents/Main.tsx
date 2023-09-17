import React from 'react';
import MainCategoryCover from './MainCategoryCover';
import Img1 from '../assets/images/img-01.png';
import Img2 from '../assets/images/img-02.png';
import Img3 from '../assets/images/img-03.png';
import Img4 from '../assets/images/img-04.png';
import Promo1 from '../assets/images/promoFirst.jpg';
import Promo2 from '../assets/images/promoForThreeProducts.png';

function Main(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <div className="py-10 md:py-16 text-center font-bold">
        <h1 className="text-2xl text-amber-600 mb-6">
          Sparkle and Shine: Unforgettable Jewelry Designs
        </h1>
        <h2 className="text-xl">
          Discover a world of possibilities in our store
        </h2>
      </div>
      <section>
        <h2 className="text-xl font-bold text-slate-700">
          Deals and Discounts
        </h2>
        <div className="flex justify-around items-center flex-wrap gap-8 md:gap-y-14 py-8">
          <img
            className="flex justify-center items-center mx-auto w-full md:w-[45%]
          rounded-2xl"
            src={Promo1}
          ></img>
          <img
            className="flex justify-center items-center mx-auto w-full md:w-[45%]
          rounded-2xl"
            src={Promo2}
          ></img>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-slate-700	">
          Product Collections
        </h2>
        <div className="flex justify-around items-center flex-wrap gap-8 md:gap-y-14 py-8">
          <div className="w-full md:w-[45%]">
            <MainCategoryCover img={Img3} name={'All products'} />
          </div>
          <div className="w-full md:w-[45%]">
            <MainCategoryCover img={Img1} name={'Rings'} />
          </div>
          <div className="w-full md:w-[45%]">
            <MainCategoryCover img={Img2} name={'Earrings'} />
          </div>
          <div className="w-full md:w-[45%]">
            <MainCategoryCover img={Img4} name={'Necklaces'} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
