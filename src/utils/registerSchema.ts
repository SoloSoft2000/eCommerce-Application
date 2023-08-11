import * as yup from 'yup';
import { subYears } from 'date-fns';
import { emailRules, passwordRules } from './mailPasswordRules';

const currentDate = new Date();

const nameValidation = yup
  .string()
  .required('This field is required')
  .min(1, 'Must contain at least one character')
  .matches(/^[A-Za-z]+$/, 'No special characters or numbers allowed');

const registerSchema = yup.object({
  email: emailRules,
  password: passwordRules,
  firstName: nameValidation,
  lastName: nameValidation,
  city: nameValidation,
  address: yup
    .string()
    .required('The address is required')
    .min(1, 'Must contain at least one character'),
  Birthday: yup
    .date()
    .required('Date of birth is required')
    .max(subYears(currentDate, 13), 'You must be at least 13 years old')
    .nullable()
    .typeError('Invalid date format'),
});

export default registerSchema;
