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
  const adressArray = [
    {
      key: 'adress_1',
      country: data.shipCountry,
      city: data.shipCity,
      streetName: data.shipStreet,
      postalCode: data.shipPostcode,
    },
  ];

  const defShipingAdress = data.shipDefault ? 0 : undefined;
  let defBillingAdress = defShipingAdress;

  if (!data.defaultAdress) {
    defBillingAdress = data.billDefault ? 1 : undefined;
    adressArray.push({
      key: 'adress_2',
      country: data.billCountry as string,
      city: data.billCity as string,
      streetName: data.billStreet as string,
      postalCode: data.billPostcode as string,
    });
  }
  const newUser: CustomerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: formatBirthdayDate(data.birthday),
    addresses: adressArray,
    shippingAddresses: [0],
    defaultShippingAddress: defShipingAdress,
    billingAddresses: [data.defaultAdress ? 0 : 1],
    defaultBillingAddress: defBillingAdress,
  };
  return newUser;
}

export default handleUserData;
