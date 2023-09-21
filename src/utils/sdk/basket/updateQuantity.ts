import { Cart } from '@commercetools/platform-sdk';
import getCart from './getCart';
import createApiRoot from '../createApiRoot';
import createCart from './createCart';
import store from '../../reducers/store';
import { setCartCount } from '../../reducers/cartCountReducer';

async function updateQuantity(
  actionType: 'addLineItem' | 'removeLineItem' | 'changeLineItemQuantity',
  id: string,
  quantity = 1
): Promise<Cart> {
  const apiRoot = createApiRoot();
  let cart: Cart;
  try {
    cart = await getCart();
  } catch (error) {
    cart = await createCart();
  }

  const updateExec = apiRoot
    .me()
    .carts()
    .withId({ ID: cart.id })
    .post({
      body: {
        version: cart.version,
        actions: [
          {
            action: actionType,
            productId: actionType === 'addLineItem' ? id : undefined,
            lineItemId:
              actionType === 'removeLineItem' ||
              actionType === 'changeLineItemQuantity'
                ? id
                : undefined,
            quantity,
          },
        ],
      },
    });

  const { body } = await updateExec.execute();
  if (body.totalLineItemQuantity) {
    store.dispatch(setCartCount(body.totalLineItemQuantity));
  } else {
    store.dispatch(setCartCount(0));
  }
  return body;
}

export default updateQuantity;
