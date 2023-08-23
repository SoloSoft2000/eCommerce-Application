import * as yup from 'yup';
import { subYears } from 'date-fns';
import { emailRules, passwordRules } from './mailPasswordRules';
import {
  countryRules,
  billPostalRules,
  shipPostalRules,
} from './countryPostalSchema';

const currentDate = new Date();

const namesRules = yup
  .string()
  .required('This field is required')
  .min(1, 'Must contain at least one character')
  .matches(
    /^[A-Za-z]+([A-Za-z\s\-/]*[A-Za-z]+)?$/,
    'Only Latin letters, spaces, dashes, and slashes are allowed'
  );

const addressRules = yup
  .string()
  .required('The address is required')
  .min(1, 'Must contain at least one character');

const birthdayRules = yup
  .date()
  .required('Date of birth is required')
  .max(subYears(currentDate, 13), 'You must be at least 13 years old')
  .nullable()
  .typeError('Invalid date format');

const booleanRules = yup.boolean();

const registerSchemaOne = yup.object({
  email: emailRules,
  password: passwordRules,
  firstName: namesRules,
  lastName: namesRules,
  defaultAdress: booleanRules,
  shipDefault: booleanRules,
  billDefault: booleanRules,
  shipCity: namesRules,
  shipCountry: countryRules,
  shipPostcode: shipPostalRules,
  shipStreet: addressRules,
  birthday: birthdayRules,
});

const registerSchemaTwo = registerSchemaOne.shape({
  billDefault: booleanRules,
  billCountry: countryRules,
  billCity: namesRules,
  billPostcode: billPostalRules,
  billStreet: addressRules,
});

export { registerSchemaOne, registerSchemaTwo };
