import { Customer /* , MyCustomerSignin */ } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';
import getCart from './basket/getCart';
import store from '../reducers/store';
import { setCartCount } from '../reducers/cartCountReducer';

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

  getCart()
    .then((dataCart) =>
      store.dispatch(setCartCount(dataCart.totalLineItemQuantity))
    )
    .catch(() => store.dispatch(setCartCount(0)));
  return body;
}

export default getCustomers;
