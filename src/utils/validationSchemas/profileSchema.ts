import * as yup from 'yup';
import { subYears } from 'date-fns';
import { emailRules } from './mailPasswordRules';

const namesRules = yup
  .string()
  .required('This field is required')
  .min(1, 'Must contain at least one character')
  .matches(/^[A-Za-z]+$/, 'No special characters or numbers allowed');

const currentDate = new Date();
const birthdayRules = yup
  .date()
  .transform((value) => new Date(value))
  .required('Date of birth is required')
  .max(subYears(currentDate, 13), 'You must be at least 13 years old')
  .nullable()
  .typeError('Invalid date format');

const profileSchema = yup.object({
  email: emailRules,
  firstName: namesRules,
  lastName: namesRules,
  dateOfBirth: birthdayRules,
});

export default profileSchema;
