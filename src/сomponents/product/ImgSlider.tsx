import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import ImgSliderProps from '../../helpers/product/slider-props';

function ImgSlider({ images }: ImgSliderProps): JSX.Element {
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [direction, setDirection] = useState<'previous' | 'next' | null>(null);

  const imgPrevious = (): void => {
    setDirection('previous');
    setIndexCurrent((indexPrevious) =>
      indexPrevious - 1 < 0 ? images.length - 1 : indexPrevious - 1
    );
  };

  const imgNext = (): void => {
    setDirection('next');
    setIndexCurrent((indexPrevious) =>
      indexPrevious + 1 === images.length ? 0 : indexPrevious + 1
    );    
  };

  const dotClick = (index: number): void => {
    setDirection(index > indexCurrent ? 'next' : 'previous');
    setIndexCurrent(index);
  };

  const variantsSlider = {
    moveNext: {
      x: "3%",
      opacity: 0.3,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    movePrevious: {
      x: "-3%",
      opacity: 0.3,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    vision: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const variantsArrows = {
    hover: {
      scale: 1.2,
    },
  };

  const variantsDots = {
    initial: {
      y: 0,
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    animate: {
      y: -7,
      scale: 1.2,
      transition: { type: "spring", stiffness: 800, damping: "8" },
    },
  };

  return (
    <div className="img-slider relative">
      <AnimatePresence>
        <motion.img
        key={indexCurrent}
        src={images[indexCurrent]}
        alt={`Image ${indexCurrent}`}
        initial={direction === 'next' ? 'moveNext' : 'movePrevious'}
        animate='vision'
        variants={variantsSlider}
      />
      </AnimatePresence>
      <div className="slide-direction absolute top-1/2 w-full transform -translate-y-1/2 flex justify-between">
        <motion.div className="left" onClick={imgPrevious} variants={variantsArrows} whileHover='hover'>
          <HiOutlineArrowNarrowLeft className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        </motion.div>
        <motion.div className="right" onClick={imgNext} variants={variantsArrows} whileHover='hover'>
          <HiOutlineArrowNarrowRight className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        </motion.div>
      </div>
      <div className="dot-click -mt-8 pb-2 flex justify-center gap-4">
            {images.map((_, index: number) => (
              <motion.div
                key={index}
                className={`dot ${indexCurrent === index ? 'active bg-white' : ''} bg-gray-900 w-4 h-4 rounded-full z-10`} 
                onClick={(): void => dotClick(index)}
                initial="initial"
                animate={indexCurrent === index ? "animate" : ""}
                whileHover="hover"
                variants={variantsDots}
              ></motion.div>
            ))}
          </div>
    </div>
  );
}

export default ImgSlider;
