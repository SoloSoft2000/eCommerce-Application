import emailValidation from '../src/utils/forms/emailValidation';

test('required validation', () => {
  const result = emailValidation.required.value;
  expect(result).toBe(true);
  expect(emailValidation.required.message).toBe('The email field is required');
});

test('pattern validation', () => {
  const result = emailValidation.pattern.value.test('user@example.com');
  expect(result).toBe(true);
  expect(emailValidation.pattern.message).toBe(
    'Enter a valid email address (e.g., user@example.com) with no leading or trailing spaces, containing a domain name and "@" symbol.'
  );
});
