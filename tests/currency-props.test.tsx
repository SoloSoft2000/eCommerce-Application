import { CurrencyProps } from '../src/helpers/interfaces/product/currency-props';

describe('CurrencyProps Interface', () => {
    it('should allow a valid object', () => {
      const validProps: CurrencyProps = {
        value: 100,
        currencyCode: 'USD',
        className: 'currency-class',
      };
  
      expect(validProps).toBeDefined();
    });
  
    it('should allow an object without optional properties', () => {
      const validProps: CurrencyProps = {
        value: 50,
      };
  
      expect(validProps).toBeDefined();
    });   
  });