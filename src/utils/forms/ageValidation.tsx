import calculateAge from './calculateAgeFunc';

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
