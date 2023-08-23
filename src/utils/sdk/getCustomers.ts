import { Customer } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const apiRoot = createApiRoot();
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
