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

const emaildValidation = {
  required: {
    value: true,
    message: 'The email field is required',
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:
      'Enter a valid email address (e.g., user@example.com) with no leading or trailing spaces, containing a domain name and "@" symbol.',
  },
};

const textFieldsValidation = {
  required: {
    value: true,
    message: 'This field is requied',
  },
  pattern: {
    value: /[A-Za-z]/,
    message: 'Min 1 letter',
  },
};

const cityValidation = {
  required: {
    value: true,
    message: 'This field is requied',
  },
  // pattern: {
  //   value: /[A-Za-z]/,
  //   message: 'Min 1 letter',
  // },
};

export {
  emaildValidation,
  passwordValidation,
  textFieldsValidation,
  cityValidation,
};
