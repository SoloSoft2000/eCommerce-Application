import { Customer } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const apiRoot = createApiRoot();
  const customerExec = await apiRoot
    .me()
    .login()
    .post({
      body: {
        email: username,
        password,
      },
    });

  const {
    body: { customer },
  } = await customerExec.execute();
  return customer;
}

export default getCustomers;
