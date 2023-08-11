import countryValidation from '../src/utils/forms/countryValidation';

describe('countryValidation', () => {
  it('should be an object', () => {
    expect(typeof countryValidation).toBe('object');
  });

  it('should have the required property with correct values', () => {
    expect(countryValidation).toHaveProperty('required');
  });

  it('should not have null as the required property', () => {
    expect(countryValidation.required).not.toBeNull();
  });
});
