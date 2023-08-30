import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
  } from 'react-icons/hi';
import { variantsArrows } from '../../helpers/functions/sliderVariations';
import { SliderArrowProps } from '../../helpers/interfaces/product/slider-props';

function SliderArrow({ direction, onClick }: SliderArrowProps): React.JSX.Element {

  const [isClicked, setIsClicked] = useState(false);

  const clickArrow = (): void => {
    setIsClicked(true);
    onClick();
  };
  
  return (
    <motion.div 
      className={direction} 
      onClick={clickArrow} 
      variants={variantsArrows} 
      initial={isClicked ? 'clicked' : 'default'} 
      animate={isClicked ? 'clicked' : 'default'} 
      onAnimationComplete={(): void => setIsClicked(false)}
      >
      {direction === 'left' ? (
          <HiOutlineArrowNarrowLeft className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        ) : (
          <HiOutlineArrowNarrowRight className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        )}
      </motion.div>
    );
  }

export default SliderArrow;
