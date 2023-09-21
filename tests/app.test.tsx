import App from '../src/App';

jest.mock('validator/es/lib/isEmail', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }): React.ReactNode =>
    children,
  SwiperSlide: ({ children }: { children: React.ReactNode }): React.ReactNode =>
    children,
}));

jest.mock('swiper/modules', () => ({
  Navigation: (): null  => null,
  Pagination: (): null  => null,
}));

jest.mock('swiper/css', () => 'swiper/css');
jest.mock('swiper/css/navigation', () => 'swiper/css/navigation');
jest.mock('swiper/css/pagination', () => 'swiper/css/pagination');

test('App is defined and it is a function', () => {
  expect(App).toBeDefined();
  expect(typeof App).toBe('function');
});
