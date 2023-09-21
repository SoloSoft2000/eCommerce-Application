import React from 'react';
import { render } from '@testing-library/react';
import ModalSlider from '../src/сomponents/product/ModalSlider';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }): JSX.Element => children as JSX.Element,
  SwiperSlide: ({ children }: { children: React.ReactNode }): JSX.Element => children as JSX.Element,
}));

jest.mock('swiper/modules', () => ({
  Navigation: (): null => null,
  Pagination: (): null => null,
}));
  
jest.mock('swiper/css', () => jest.fn());
jest.mock('swiper/css/navigation', () => jest.fn());
jest.mock('swiper/css/pagination', () => jest.fn());
  
describe('ModalSlider', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  const selectedIndex = 1;
  const onClose = jest.fn();
  
    it('renders the ModalSlider component correctly', () => {
      const { container, getAllByAltText } = render(
        <ModalSlider images={images} selectedIndex={selectedIndex} onClose={onClose} />
      );
  
      expect(container).not.toBeNull();
  
      const imgElements = getAllByAltText(/^Slide \d+$/i);
      expect(imgElements).toHaveLength(images.length);
  
    });
  });
