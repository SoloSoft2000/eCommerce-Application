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
  console.log(ctpClient);

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });
  const customer = await apiRoot.me().get().execute();

  return customer.body;
}

export default getCustomers;
