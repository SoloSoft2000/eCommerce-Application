import { Cart } from '@commercetools/platform-sdk';
import getCart from './getCart';
import createApiRoot from '../createApiRoot';
import createCart from './createCart';

async function addDiscount(discountCode: string): Promise<Cart> {
  const actionType = 'addDiscountCode';
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
            code: discountCode.toUpperCase(),
          },
        ],
      },
    });

  const { body } = await updateExec.execute();
  return body;
}

export default addDiscount;
