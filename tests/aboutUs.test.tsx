import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUsPage from '../src/pages/AboutUsPage';

jest.mock('../assets/images/img-03.png', () => 'fake-image-path');

describe('AboutUsPage component', () => {
  test('renders main picture with alt text', () => {
    const { getByAltText } = render(<AboutUsPage />);
    const mainPicture = getByAltText('main picture');
    expect(mainPicture).toBeInTheDocument();
  });

  test('renders heading text', () => {
    const { getByText } = render(<AboutUsPage />);
    const heading = getByText('About Us');
    expect(heading).toBeInTheDocument();
  });
});
