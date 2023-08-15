import {
  ClientResponse,
  createApiBuilderFromCtpClient,
  Customer,
  CustomerDraft,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function newCustomers(newCustomer: CustomerDraft): Promise<Customer> {
  const ctpClient = createClient();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  const createCustomer = (): Promise<ClientResponse<CustomerSignInResult>> =>
    apiRoot
      .customers()
      .post({
        body: newCustomer,
      })
      .execute();

  return (await createCustomer()).body.customer;
}

export default newCustomers;
