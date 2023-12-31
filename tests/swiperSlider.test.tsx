import React from 'react';
import { render } from '@testing-library/react';
import SwiperComponent from '../src/сomponents/product/SwiperSlider';

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

describe('SwiperComponent', () => {
  it('renders without errors', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    const { container } = render(<SwiperComponent images={images} />);
    expect(container).toBeDefined();
  });

  it('displays the correct number of images', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const { getAllByAltText } = render(<SwiperComponent images={images} />);
    const imgElements = getAllByAltText(/Slide \d/);
    expect(imgElements).toHaveLength(images.length);
  });

  it('initially does not display the modal', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const { queryByText } = render(<SwiperComponent images={images} />);
    expect(queryByText('Slide 1')).toBeNull();
  });
});
