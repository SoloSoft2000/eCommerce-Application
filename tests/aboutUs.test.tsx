import '@testing-library/jest-dom';
import AboutUsPage from '../src/pages/AboutUsPage';

test('AboutUs page component is defined and it is a function', () => {
  expect(AboutUsPage).toBeDefined();
  expect(typeof AboutUsPage).toBe('function');
});
