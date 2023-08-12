import * as yup from 'yup';
import { subYears } from 'date-fns';
import { emailRules, passwordRules } from './mailPasswordRules';
import { countryRules, postalRules } from './countryPostalSchema';

const currentDate = new Date();

const namesRules = yup
  .string()
  .required('This field is required')
  .min(1, 'Must contain at least one character')
  .matches(/^[A-Za-z]+$/, 'No special characters or numbers allowed');

const registerSchema = yup.object({
  email: emailRules,
  password: passwordRules,
  firstName: namesRules,
  lastName: namesRules,
  billCity: namesRules,
  shipCity: namesRules,
  address: yup
    .string()
    .required('The address is required')
    .min(1, 'Must contain at least one character'),
  postcode: postalRules,
  country: countryRules,
  Birthday: yup
    .date()
    .required('Date of birth is required')
    .max(subYears(currentDate, 13), 'You must be at least 13 years old')
    .nullable()
    .typeError('Invalid date format'),
});

export default registerSchema;
