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
import ModalSlider from './ModalSlider';

function SwiperComponent({ images }: SwiperComponentProps): React.ReactElement {
  const [isNextArrowClicked, setNextArrowClicked] = useState(false);
  const [isPrevArrowClicked, setPrevArrowClicked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = useCallback(
    (index: number): void => {
      setSelectedImageIndex(index);
      setModalOpen(true);
    },
    [setSelectedImageIndex, setModalOpen]
  );

  const closeModal = useCallback((): void => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  }, [setSelectedImageIndex, setModalOpen]);

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
        className="mySwiper relative h-full w-1/4 max-sm:w-3/5 border rounded hover:drop-shadow-lg"
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="select-none"
              onClick={(): void => openModal(index)}
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
      {isModalOpen && (
        <ModalSlider
          images={images}
          selectedIndex={selectedImageIndex !== null ? selectedImageIndex : 0}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default SwiperComponent;
