import App from '../src/App';

jest.mock('validator/es/lib/isEmail', () => ({
    __esModule: true,
    default: jest.fn(),
}));

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
  

test('App is defined and it is a function', () => {
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');    
});