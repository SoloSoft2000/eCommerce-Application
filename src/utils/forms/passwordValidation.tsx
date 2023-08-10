const passwordValidation = {
  required: {
    value: true,
    message: 'This field is requied',
  },
  minLength: {
    value: 6,
    message: 'Ok',
  },
  // pattern: {
  //   value: /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/,
  //   message:
  //     'Password requires 8+ characters, an uppercase letter, a lowercase letter, a digit, and optionally a special character, with no leading/trailing spaces.',
  // },
};

export default passwordValidation;
