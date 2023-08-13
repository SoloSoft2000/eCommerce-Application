import {
  createApiBuilderFromCtpClient,
  Customer,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const ctpClient = createClient({ username, password });

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });
  const customer = await apiRoot
    .me()
    .login()
    .post({
      body: {
        email: username,
        password,
      },
    });

  return (await customer.execute()).body.customer;
}

export default getCustomers;
