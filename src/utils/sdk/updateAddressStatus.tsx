import { Customer, CustomerUpdateAction } from '@commercetools/platform-sdk';
import updateUser from './updateUser';

export type AddressActionType =
  | 'setDefaultShippingAddress'
  | 'addShippingAddressId'
  | 'removeShippingAddressId'
  | 'setDefaultBillingAddress'
  | 'addBillingAddressId'
  | 'removeBillingAddressId'
  | 'removeAddress';

function updateAddressStatus(
  customer: Customer,
  actionType: AddressActionType,
  addressIdKey: string | undefined,
  isId = true
): Promise<Customer> {
  const action: CustomerUpdateAction = isId
    ? {
        action: actionType,
        addressId: addressIdKey,
      }
    : {
        action: actionType,
        key: addressIdKey,
      };

  const body = updateUser(customer, [action]).catch((err) => {
    throw Error(err.message);
  });

  return body;
}

export default updateAddressStatus;
