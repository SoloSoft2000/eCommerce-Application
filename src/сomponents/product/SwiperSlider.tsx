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
import ImgModal from './ImgModal';

function SwiperComponent({ images }: SwiperComponentProps): React.ReactElement {
  const [isNextArrowClicked, setNextArrowClicked] = useState(false);
  const [isPrevArrowClicked, setPrevArrowClicked] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const modalOpen = useCallback((index: number): void => {
    setSelectedImageIndex(index);
  }, []);

  const modalClose = useCallback((): void => {
    setSelectedImageIndex(null);
  }, []);

  const nextArrowClick = useCallback((): void => {
    setNextArrowClicked(true);
    setTimeout((): void => {
      setNextArrowClicked(false);
    }, 200);
  }, []);

  const prevArrowClick = useCallback((): void => {
    setPrevArrowClicked(true);
    setTimeout((): void => {
      setPrevArrowClicked(false);
    }, 200);
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper relative w-1/3"
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="select-none"
              onClick={(): void => modalOpen(index)}
            />
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
      <ImgModal
        isOpen={selectedImageIndex !== null}
        onClose={modalClose}
        image={selectedImageIndex !== null ? images[selectedImageIndex] : ''}
      />
    </>
  );
}

export default SwiperComponent;
