import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailedProductCard from '../src/сomponents/product/DetailedProductCard';

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

const mockProduct = {
  title: 'Sample Product',
  description: 'This is a sample product',
  productBrand: 'Sample Brand',
  productStyle: 'Sample Style',
  images: ['image1.jpg', 'image2.jpg'],
  price: 50,
  discount: 10,
};

describe('DetailedProductCard', () => {
  it('renders component with correct data', () => {
    render(<DetailedProductCard {...mockProduct} />);
    
    expect(mockProduct).not.toBeNull();
    expect(typeof mockProduct).toBe('object');
    
    expect(screen.getByText(mockProduct.title)).not.toBeNull();
    expect(screen.getByText(mockProduct.description)).not.toBeNull();
    expect(screen.getByText(mockProduct.productBrand)).not.toBeNull();
    expect(screen.getByText(mockProduct.productStyle)).not.toBeNull();
  });
});
