import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketPage from '../src/pages/BasketPage';

jest.mock('../assets/images/img-03.png', () => 'fake-image-path');

describe('BasketPage component', () => {
  test('renders main picture with alt text', () => {
    const { getByAltText } = render(<BasketPage />);
    const mainPicture = getByAltText('main picture');
    expect(mainPicture).toBeInTheDocument();
  });

  test('renders heading text', () => {
    const { getByText } = render(<BasketPage />);
    const heading = getByText('Basket');
    expect(heading).toBeInTheDocument();
  });
});
