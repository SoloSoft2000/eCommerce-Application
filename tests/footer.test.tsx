import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/сomponents/Footer';

describe('Footer', () => {
  it('renders the footer with correct content and classes', () => {
    const { getByText, getByAltText } = render(<Footer />);

    const footerEl = document.querySelector('footer');
    expect(footerEl).toBeInTheDocument();

    const githubLinks = [
      'Eugene Solomonyk GitHub',
      'Yana Zahoruiko GitHub',
      'Olga Buksman GitHub',
    ];
    githubLinks.forEach((linkText) => {
      const linkElement = getByText(linkText);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href');
    });

    const logoImg = getByAltText('RSSchool logo');
    expect(logoImg).toBeInTheDocument();

    const expectedClasses =
      'container mx-auto left-0 z-20 w-full p-4 bg-white border-y border-gray-200';
    expect(footerEl).toHaveClass(expectedClasses);
  });
});
