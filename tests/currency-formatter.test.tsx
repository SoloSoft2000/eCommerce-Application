import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrencyFormatter from '../src/helpers/functions/currency-formatter';

describe('CurrencyFormatter', () => {
  it('renders formatted currency with currency code', () => {
    const { getByText } = render(<CurrencyFormatter value={1000} />);
    const currencyElement = getByText('$1,000.00');

    expect(currencyElement).toBeInTheDocument();
    expect(currencyElement).not.toBeNull();
  });

  it('renders formatted currency with custom currency code', () => {
    const { getByText } = render(<CurrencyFormatter value={1000} currencyCode="EUR" />);
    const currencyElement = getByText('€1,000.00');

    expect(currencyElement).toBeInTheDocument();
  });

  it('applies custom class to the element', () => {
    const { container } = render(<CurrencyFormatter value={1000} className="custom-class" />);
    const currencyElement = container.querySelector('.custom-class');

    expect(currencyElement).toBeInTheDocument();
  });
});
