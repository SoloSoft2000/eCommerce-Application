import { CustomerDraft } from '@commercetools/platform-sdk';
import UserRegistrate from '../../../helpers/interfaces/forms/user-registration';

function formatBirthdayDate(date: Date | null | undefined): string | undefined {
  if (date) {
    const year = date.getFullYear().toString();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
  return undefined;
}

function handleUserData(data: UserRegistrate): CustomerDraft {
  const newUser: CustomerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: formatBirthdayDate(data.birthday),
    addresses: [
      {
        key: 'adress_1',
        country: data.shipCountry,
        city: data.shipCity,
        streetName: data.shipStreet,
        postalCode: data.shipPostcode,
      },
      {
        key: 'adress_2',
        country: data.billCountry || data.shipCountry,
        city: data.billCity || data.shipCity,
        streetName: data.billStreet || data.shipStreet,
        postalCode: data.billPostcode || data.shipPostcode,
      },
    ],
    shippingAddresses: [0],
    defaultShippingAddress: 0,
    billingAddresses: [1],
    defaultBillingAddress: 1,
  };
  return newUser;
}

export default handleUserData;