import React, { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { ModalSliderProps } from '../../helpers/interfaces/product/slider-props';

function ModalSlider({
  images,
  selectedIndex,
  onClose,
}: ModalSliderProps): React.ReactElement {
  const [isNextArrowClicked, setNextArrowClicked] = useState(false);
  const [isPrevArrowClicked, setPrevArrowClicked] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(selectedIndex);

  useEffect(() => {
    setCurrentSlideIndex(selectedIndex);
  }, [selectedIndex]);

  const nextArrowClick = useCallback(() => {
    setNextArrowClicked(true);
    setTimeout(() => {
      setNextArrowClicked(false);
    }, 200);
  }, []);

  const prevArrowClick = useCallback(() => {
    setPrevArrowClicked(true);
    setTimeout(() => {
      setPrevArrowClicked(false);
    }, 200);
  }, []);

  const clickOutsideModal = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.classList.add('block-scroll');
    return () => {
      document.body.classList.remove('block-scroll');
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-70 z-20"
      onClick={clickOutsideModal}
    >
      <div className="bg-white p-4 shadow-md md:max-xl:w-1/2 max-md:w-9/12 w-1/3">
        <Swiper
          initialSlide={currentSlideIndex !== null ? currentSlideIndex : 0}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          pagination={{ type: 'fraction' }}
          className="modal-swiper mySwiper relative"
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
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
          <button
            className="absolute top-1 right-1 cursor-pointer z-10"
            onClick={onClose}
          >
            <GrClose className="m-1 p-1 bg-gray-100 hover:bg-white rounded-none w-7 h-7" />
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default ModalSlider;
