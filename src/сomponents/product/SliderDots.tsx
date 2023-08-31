import React from 'react';
import { motion } from 'framer-motion';
import { variantsDots } from '../../helpers/functions/sliderVariations';
import { SliderDotProps } from '../../helpers/interfaces/product/slider-props';

function SliderDot({ isActive, onClick }: SliderDotProps): React.JSX.Element {
  return (
    <motion.div
      className={`dot ${
        isActive ? 'active bg-white' : ''
      } bg-gray-900 w-4 h-4 rounded-full z-10`}
      onClick={onClick}
      initial="initial"
      animate={isActive ? 'animate' : ''}
      whileHover="hover"
      variants={variantsDots}
    ></motion.div>
  );
}

export default SliderDot;
