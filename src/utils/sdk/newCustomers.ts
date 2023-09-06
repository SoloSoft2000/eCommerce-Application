import {
  ClientResponse,
  Customer,
  CustomerDraft,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function newCustomers(newCustomer: CustomerDraft): Promise<Customer> {
  const apiRoot = createApiRoot();

  const createCustomer = (): Promise<ClientResponse<CustomerSignInResult>> =>
    apiRoot
      .customers()
      .post({
        body: newCustomer,
      })
      .execute();

  const {
    body: { customer },
  } = await createCustomer();
  return customer;
}

export default newCustomers;
