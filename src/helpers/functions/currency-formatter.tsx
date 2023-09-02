import React from 'react';
import { CurrencyProps } from '../interfaces/product/currency-props';

const CurrencyFormatter: React.FC<CurrencyProps> = ({
  value,
  currencyCode = 'USD',
  className = '',
}) => {
  const formattedCurrency: string = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(value);

  return <span className={className}>{formattedCurrency}</span>;
};

export default CurrencyFormatter;