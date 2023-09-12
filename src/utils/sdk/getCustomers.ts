import { Customer /* , MyCustomerSignin */ } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const apiRoot = createApiRoot('password', username, password);

  const customerExec = apiRoot
    .me()
    .login()
    .post({
      body: {
        email: username,
        password,
        updateProductData: true,
      },
    });

  const {
    body: { customer, cart },
  } = await customerExec.execute();

  // if (customer) {
  //   apiRoot = createApiRoot('password', username, password);
  // }

  if (cart) {
    localStorage.setItem('CT-Cart-CustomerID', cart.id);
    sessionStorage.removeItem('CT-Cart-AnonymID');
  }
  return customer;
}

export default getCustomers;
