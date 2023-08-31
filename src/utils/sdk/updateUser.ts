import {
  ClientResponse,
  Customer,
  CustomerUpdateAction,
  //   CustomerDraft,
  //   CustomerSignInResult,
} from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function updateUser(
  customer: Customer,
  action: CustomerUpdateAction
): Promise<Customer> {
  const apiRoot = createApiRoot();

  const updateCustomer = (): Promise<ClientResponse<Customer>> =>
    apiRoot
      .customers()
      .withId({ ID: customer.id })
      .post({
        body: {
          version: customer.version,
          actions: [action],
        },
      })
      .execute();

  const { body } = await updateCustomer();
  return body;
}

export default updateUser;
