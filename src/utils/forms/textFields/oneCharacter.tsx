const oneCharacter = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^.{1,}$/,
    message: 'Must contain at least one character',
  },
};

export default oneCharacter;
