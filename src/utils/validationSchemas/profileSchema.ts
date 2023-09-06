import * as yup from 'yup';
import { parse, subYears } from 'date-fns';
import { emailRules } from './mailPasswordRules';

const namesRules = yup
  .string()
  .required('This field is required')
  .min(1, 'Must contain at least one character')
  .matches(
    /^[A-Za-z]+( [A-Za-z]+)*$/,
    'No special characters or numbers allowed, only Latin letters and spaces between words'
  );

const currentDate = new Date();
const birthdayRules = yup
  .string()
  .required('Date of birth is required')
  .nullable()
  .test('oldAge', 'You must be at least 13 years old', (value) => {
    const parsedDate = parse(value as string, 'yyyy-MM-dd', new Date());
    return parsedDate && parsedDate <= subYears(currentDate, 13);
  })
  .typeError('Invalid date format');

const profileSchema = yup.object().shape({
  email: emailRules,
  firstName: namesRules,
  lastName: namesRules,
  dateOfBirth: birthdayRules,
});

export default profileSchema;
