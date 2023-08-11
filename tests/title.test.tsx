import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Title from '../src/components/forms/Title';

describe('Title Component', () => {
  it('renders title with correct text and styling', () => {
    const { getByText } = render(<Title />);
    const element = getByText('My account');

    expect(element).toBeInTheDocument();

    expect(element).toHaveClass('text-xl', 'font-bold', 'mb-8', 'text-center');
  });
});
