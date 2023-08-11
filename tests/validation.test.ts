import textFieldsValidation from '../src/utils/forms/validation';

describe('textFieldsValidation', () => {
  test('required field is true', () => {
    expect(textFieldsValidation.required.value).toBe(true);
  });

  test('required field message is not null', () => {
    const result = textFieldsValidation.required;
    expect(result.message).not.toBeNull();
  });

  test('pattern field message is not null', () => {
    const result = textFieldsValidation.pattern;
    expect(result.message).not.toBeNull();
  });

  test('pattern field has the correct regular expression', () => {
    const patternText = /[A-Za-z]/;
    expect(textFieldsValidation.pattern.value).toEqual(patternText);
  });

  test('message of pattern field is Min 1 letter', () => {
    expect(textFieldsValidation.pattern.message).toBe('Min 1 letter');
  });
});
