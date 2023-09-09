import { Customer } from '@commercetools/platform-sdk';
import { createApiSignRoot } from './createApiRoot';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const apiRoot = createApiSignRoot(true);
  // let body: MyCustomerSignin;

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

  const {
    body: { customer, cart },
  } = await customerExec.execute();

  if (cart) {
    localStorage.setItem('CT-Cart-CustomerID', cart.id);
    sessionStorage.removeItem('CT-Cart-AnonymID');
  }
  return customer;
}

export default getCustomers;
