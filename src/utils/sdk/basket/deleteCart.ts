import { Cart } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';
import store from '../../reducers/store';
import { setCartCount } from '../../reducers/cartCountReducer';

async function deleteCart(cart: Cart): Promise<boolean> {
  const apiRoot = createApiRoot();
  let result = false;
  await apiRoot
    .carts()
    .withId({ ID: cart.id })
    .delete({ queryArgs: { version: cart.version } })
    .execute()
    .then(() => {
      result = true;
      store.dispatch(setCartCount(0));
    })
    .catch(() => {
      result = false;
    });

  return result;
}

export default deleteCart;
