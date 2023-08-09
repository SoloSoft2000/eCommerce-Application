const passwordValidation = {
  validation: {
    required: {
      value: true,
      message: 'This field is requied',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
};

const emaildValidation = {
  required: {
    value: true,
    message: '🔺 The email field is required',
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Not valid email formate',
  },
};

export { emaildValidation, passwordValidation };
