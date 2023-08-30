import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperComponentProps } from '../../helpers/interfaces/product/slider-props';

  function SwiperComponent({ images }: SwiperComponentProps): React.ReactElement {
    return (
    <Swiper
    pagination={{
        type: 'fraction',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper w-1/3"
    loop={true}
    >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="select-none" />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
    
export default SwiperComponent;
