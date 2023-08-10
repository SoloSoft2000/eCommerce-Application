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

export default textFieldsValidation;
