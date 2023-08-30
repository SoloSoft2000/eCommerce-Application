import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
  } from 'react-icons/hi';
import { variantsArrows } from '../../helpers/functions/sliderVariaions';
import { SliderArrowProps } from '../../helpers/interfaces/product/slider-props';

function SliderArrow({ direction, onClick }: SliderArrowProps): React.JSX.Element {
    return (
      <motion.div className={direction} onClick={onClick} variants={variantsArrows} whileHover='hover'>
        {direction === 'left' ? (
          <HiOutlineArrowNarrowLeft className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        ) : (
          <HiOutlineArrowNarrowRight className="h-8 w-8 mx-3 text-white cursor-pointer border border-gray-900 bg-gray-900 rounded-full p-1" />
        )}
      </motion.div>
    );
  }

export default SliderArrow;
