const letterCharacter = {
  required: {
    value: true,
    message: 'This field is requied',
  },
  pattern: {
    value: /[A-Za-z]/,
    message: 'Min one letter',
  },
};

export default letterCharacter;
