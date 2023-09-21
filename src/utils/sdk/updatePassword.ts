import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function updatePassword(
  customer: Customer,
  oldPassword: string,
  newPassword: string
): Promise<Customer> {
  const apiRoot = createApiRoot();

  const createCustomer = (): Promise<ClientResponse<Customer>> =>
    apiRoot
      .customers()
      .password()
      .post({
        body: {
          id: customer.id,
          version: customer.version,
          currentPassword: oldPassword,
          newPassword,
        },
      })
      .execute();

  const { body } = await createCustomer().catch((err) => {
    throw Error(err.message);
  });
  return body;
}

export default updatePassword;
