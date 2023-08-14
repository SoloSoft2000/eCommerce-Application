import { CustomerDraft } from '@commercetools/platform-sdk';
import UserRegistrate from '../../interfaces/forms/user-registration';

function handleUserData(data: UserRegistrate): CustomerDraft {
  const newUser: CustomerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    // dateOfBirth: data.birthday,
    addresses: [
      {
        key: '1',
        country: data.shipCountry,
        city: data.shipCity,
        streetName: data.shipStreet,
        postalCode: data.shipPostcode,
      },
      {
        key: '2',
        country: data.billCountry || data.shipCountry,
        city: data.billCity || data.shipCity,
        streetName: data.billStreet || data.shipStreet,
        postalCode: data.billPostcode || data.shipPostcode,
      },
    ],
  };
  return newUser;
}

export default handleUserData;
