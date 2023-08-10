import postalCodeValidation from './postalCode';
import oneCharacter from './oneCharacter';
import letterCharacter from './letterCharacter';
import { TextFields } from '../../../interfaces/forms/form-props';

const textFieldsValidation: TextFields = {
  postcode: postalCodeValidation,
  billingPostcode: postalCodeValidation,
  city: letterCharacter,
  firstName: letterCharacter,
  lastName: letterCharacter,
  billingCity: letterCharacter,
  address: oneCharacter,
  billingAddress: oneCharacter,
};

export default textFieldsValidation;
