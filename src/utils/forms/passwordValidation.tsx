function isStrongPassword(password: string): boolean {
  const checkPassword =
    password.length < 8 &&
    !/[A-Z]/.test(password) &&
    !/[a-z]/.test(password) &&
    !/[a-z]/.test(password) &&
    !/\d/.test(password) &&
    password !== password.trim();
  if (checkPassword) return false;

  return true;
}

const errorMassage =
  'Password requires 8+ characters, an uppercase letter, a lowercase letter, a digit, and optionally a special character, with no leading/trailing spaces.';

const passwordValidation = {
  required: {
    value: true,
    message: 'This field is requied',
  },
  minLength: {
    value: 8,
    message: errorMassage,
  },
  validate: (value: string): string | boolean =>
    isStrongPassword(value) || errorMassage,
};

export default passwordValidation;
