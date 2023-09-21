import {
  ClientResponse,
  Customer,
  CustomerUpdateAction,
} from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function updateUser(
  customer: Customer,
  actions: CustomerUpdateAction[]
): Promise<Customer> {
  const apiRoot = createApiRoot();

  const updateCustomer = (): Promise<ClientResponse<Customer>> =>
    apiRoot
      .customers()
      .withId({ ID: customer.id })
      .post({
        body: {
          version: customer.version,
          actions,
        },
      })
      .execute();

  const { body } = await updateCustomer().catch((err) => {
    throw Error(err.message);
  });
  return body;
}

export default updateUser;
