function isValidPostalCode(postalCode: string): boolean {
  const canadianPostalCodePattern = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
  const usaPostalCodePattern = /^\d{5}(?:-\d{4})?$/;

  return (
    canadianPostalCodePattern.test(postalCode) ||
    usaPostalCodePattern.test(postalCode)
  );
}

const postalCodeValidation = {
  required: {
    value: true,
    message: 'This field is requied',
  },
  validate: (value: string): string | boolean =>
    isValidPostalCode(value) || 'Wrong country format',
};

export default postalCodeValidation;
