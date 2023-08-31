import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { SwiperComponentProps } from '../../helpers/interfaces/product/slider-props';

function SwiperComponent({ images }: SwiperComponentProps): React.ReactElement {
  const [isNextArrowClicked, setNextArrowClicked] = useState(false);
  const [isPrevArrowClicked, setPrevArrowClicked] = useState(false);

  const nextArrowClick = useCallback(() => {
    setNextArrowClicked(true);
    setTimeout((): void => {
      setNextArrowClicked(false);
    }, 200);
  }, []);

  const prevArrowClick = useCallback(() => {
    setPrevArrowClicked(true);
    setTimeout((): void => {
      setPrevArrowClicked(false);
    }, 200);
  }, []);

  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={{
        nextEl: '.image-swiper-button-next',
        prevEl: '.image-swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-1/3 relative"
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="select-none" />
        </SwiperSlide>
      ))}

      <div
        className={`swiper-button image-swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-3 z-10 h-8 w-8 select-none ${
          isNextArrowClicked ? 'scale-125' : ''
        }`}
        onClick={nextArrowClick}
      >
        <BsFillArrowRightCircleFill className="w-7 h-7" />
      </div>
      <div
        className={`swiper-button image-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-3 z-10 h-8 w-8 select-none ${
          isPrevArrowClicked ? 'scale-125' : ''
        }`}
        onClick={prevArrowClick}
      >
        <BsFillArrowLeftCircleFill className="w-7 h-7" />
      </div>
    </Swiper>
  );
}

export default SwiperComponent;
