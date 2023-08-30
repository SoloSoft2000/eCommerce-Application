import React, { useState } from 'react';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import ImgSliderProps from '../../helpers/product/slider-props';

function ImgSlider({ images }: ImgSliderProps): JSX.Element {
  const [indexCurrent, setIndexCurrent] = useState(0);

  const imgPrevious = (): void => {
    setIndexCurrent((indexPrevious) =>
      indexPrevious - 1 < 0 ? images.length - 1 : indexPrevious - 1
    );
  };

  const imgNext = (): void => {
    setIndexCurrent((indexPrevious) =>
      indexPrevious + 1 === images.length ? 0 : indexPrevious + 1
    );
  };

  const dotClick = (index: number): void => {
    setIndexCurrent(index);
  };

  return (
    <div className="img-slider relative">
      <img
        key={indexCurrent}
        src={images[indexCurrent]}
        alt={`Image ${indexCurrent}`}
      />
      <div className="slide-direction absolute top-1/2 w-full transform -translate-y-1/2 flex justify-between">
        <div className="left" onClick={imgPrevious}>
          <HiOutlineArrowNarrowLeft className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        </div>
        <div className="right" onClick={imgNext}>
          <HiOutlineArrowNarrowRight className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        </div>
      </div>
      <div className="dot-click -mt-8 pb-2 flex justify-center gap-4">
            {images.map((_, index: number) => (
              <div
                key={index}
                className={`dot ${indexCurrent === index ? 'active bg-white' : ''} bg-gray-900 w-4 h-4 rounded-full`} 
                onClick={(): void => dotClick(index)}
              ></div>
            ))}
          </div>
    </div>
  );
}

export default ImgSlider;
