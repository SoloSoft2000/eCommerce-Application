const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  const age = today.getFullYear() - birthDateObj.getFullYear();

  if (
    today.getMonth() < birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() &&
      today.getDate() < birthDateObj.getDate())
  ) {
    return age - 1;
  }
  return age;
};

const birthdayValidation = {
  required: {
    value: true,
    message: 'This field is required',
  },
  validate: {
    validAge: (date: Date): string | boolean => {
      const age = calculateAge(date);
      return age >= 13 || 'Your age should be 13 and above.';
    },
  },
};

export default birthdayValidation;
