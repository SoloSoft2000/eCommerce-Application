import * as yup from 'yup';
import { countryRules, shipPostalRules } from './countryPostalSchema';

const namesRules = yup
  .string()
  .required('This field is required')
  .min(1, 'Must contain at least one character')
  .matches(
    /^[A-Za-z]+( [A-Za-z]+)*$/,
    'No special characters or numbers allowed, only Latin letters and spaces between words'
  );

const addressRules = yup
  .string()
  .required('The address is required')
  .min(1, 'Must contain at least one character');

const addressSchema = yup.object({
  Country: countryRules,
  City: namesRules,
  Postcode: shipPostalRules,
  Street: addressRules,
});

export default addressSchema;
