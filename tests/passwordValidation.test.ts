import passwordValidation from '../src/utils/forms/passwordValidation';

describe('passwordValidation', () => {
  test('required field has a value of true', () => {
    expect(passwordValidation.required.value).toBe(true);
  });

  test('minLength field is 6', () => {
    expect(passwordValidation.minLength.value).toBe(6);
  });

  test('message for minLength field is Ok', () => {
    expect(passwordValidation.minLength.message).toBe('Ok');
  });
});
