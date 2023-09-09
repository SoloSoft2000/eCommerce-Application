import { Cart } from '@commercetools/platform-sdk';
import getCart from './getCart';
import { createApiSignRoot } from '../createApiRoot';
import createCart from './createCart';

async function updateQuantity(
  actionType: 'addLineItem' | 'removeLineItem',
  id: string,
  quantity = 1
): Promise<Cart> {
  const apiRoot = createApiSignRoot();
  let cart: Cart;
  try {
    cart = await getCart();
  } catch (error) {
    cart = await createCart();
  }

  const updateExec = apiRoot
    .carts()
    .withId({ ID: cart.id })
    .post({
      body: {
        version: cart.version,
        actions: [
          {
            action: actionType,
            productId: actionType === 'addLineItem' ? id : undefined,
            lineItemId: actionType === 'removeLineItem' ? id : undefined,
            quantity,
          },
        ],
      },
    });

  const { body } = await updateExec.execute();
  return body;
}

export default updateQuantity;
