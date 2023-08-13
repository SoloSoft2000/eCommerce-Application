import * as yup from 'yup';

export const postalRules = yup
  .string()
  .required('Postal code is required')
  .test('isValidPostalCode', 'Invalid postal code format', function (value) {
    const country = this.parent.Country;

    if (country === 'USA') {
      return /^\d{5}$/.test(value || '');
    }
    if (country === 'Canada') {
      return /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/.test(value || '');
    }

    return false;
  });

export const countryRules = yup
  .string()
  .required('Country is required')
  .oneOf(['USA', 'Canada'], 'Must be a valid country');