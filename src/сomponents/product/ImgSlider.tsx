import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImgSliderProps } from '../../helpers/interfaces/product/slider-props';
import { variantsSlider } from '../../helpers/functions/sliderVariations';
import SliderArrow from './SliderArrow';
import SliderDot from './SliderDots';

function ImgSlider({ images }: ImgSliderProps): JSX.Element {
  const [indexCurrent, setIndexCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<'previous' | 'next' | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadImages = async (): Promise<void> => {
      const loadedImages: HTMLImageElement[] = await Promise.all(
        images.map((src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = (): void => resolve(img);
            img.onerror = (error): void => reject(error);
          }))
      );
      setPreloadedImages(loadedImages);
    };

    loadImages();
  }, [images]);

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

  return (
    <div className="img-slider relative">
      <AnimatePresence>
        <motion.img
          key={indexCurrent}
          src={preloadedImages[indexCurrent]?.src || ''}
          alt={`Image ${indexCurrent}`}
          initial={direction === 'next' ? 'moveNext' : 'movePrevious'}
          animate='vision'
          variants={variantsSlider}
        />
      </AnimatePresence>
      <div className="slide-direction absolute top-1/2 w-full transform -translate-y-1/2 flex justify-between">
        <SliderArrow direction="left" onClick={imgPrevious} />
        <SliderArrow direction="right" onClick={imgNext} />
      </div>
      <div className="dot-click -mt-8 pb-2 flex justify-center gap-4">
        {images.map((_, index: number) => (
          <SliderDot
            key={index}
            isActive={indexCurrent === index}
            onClick={(): void => dotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImgSlider;
