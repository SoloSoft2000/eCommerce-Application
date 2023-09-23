import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketPage from '../src/pages/BasketPage';

jest.mock('../assets/images/img-03.png', () => 'fake-image-path');

describe('BasketPage component', () => {
  test('renders heading text', () => {
    const { getByText } = render(<BasketPage />);
    const heading = getByText('Cart Totals');
    expect(heading).toBeInTheDocument();
  });

  test('renders heading text', () => {
    const { getByText } = render(<BasketPage />);
    const heading = getByText('Shopping Cart');
    expect(heading).toBeInTheDocument();
  });
});
