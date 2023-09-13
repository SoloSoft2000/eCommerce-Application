import { Customer /* , MyCustomerSignin */ } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const apiRoot = createApiRoot();

  const customerExec = apiRoot
    .me()
    .login()
    .post({
      body: {
        email: username,
        password,
        activeCartSignInMode: 'MergeWithExistingCustomerCart',
        updateProductData: true,
      },
    });

  await customerExec.execute();
  const ap = createApiRoot('password', username, password);
  const { body } = await ap.me().get().execute();
  return body;
}

export default getCustomers;
