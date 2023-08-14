import * as yup from 'yup';

const validatePostalCode = (country: string, value: string): boolean => {
  if (country === 'USA') {
    return /^\d{5}$/.test(value || '');
  }
  if (country === 'Canada') {
    return /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/.test(value || '');
  }
  return false;
};

export const shipPostalRules = yup
  .string()
  .required('Postal code is required')
  .test(
    'isValidPostalCode',
    'Invalid postal code format',
    function check(value) {
      const country = this.parent.shipCountry;
      return validatePostalCode(country, value);
    }
  );

export const billPostalRules = yup
  .string()
  .required('Postal code is required')
  .test(
    'isValidPostalCode',
    'Invalid postal code format',
    function check(value) {
      const country = this.parent.billCountry;
      return validatePostalCode(country, value);
    }
  );

export const countryRules = yup
  .string()
  .required('Country is required')
  .oneOf(['USA', 'Canada'], 'Must be a valid country');
