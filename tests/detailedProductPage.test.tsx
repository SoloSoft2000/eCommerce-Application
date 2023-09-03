import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductPage from '../src/pages/DetailedProductPage';

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: { children: React.ReactNode }) => children,
    SwiperSlide: ({ children }: { children: React.ReactNode }) => children,
  }));
  
jest.mock('swiper/modules', () => ({
    Navigation: (props: string) => null,
    Pagination: (props: string) => null,
  }));
  
jest.mock('swiper/css', () => jest.fn());
jest.mock('swiper/css/navigation', () => jest.fn());
jest.mock('swiper/css/pagination', () => jest.fn());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: '/mocked-path',
    }),
  }));
  
 
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(), 
  }));

describe('ProductPage', () => {
    it('renders without errors', () => {
      render(
        <MemoryRouter initialEntries={['/product/123']}>
          <ProductPage />
        </MemoryRouter>
      );
    });
  });

  