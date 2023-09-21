import { Cart } from '@commercetools/platform-sdk';
import getCart from './getCart';
import createApiRoot from '../createApiRoot';
import createCart from './createCart';

async function cancelDiscount(discountId: string): Promise<Cart> {
  const actionType = 'removeDiscountCode';
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
            discountCode: {
              typeId: 'discount-code',
              id: discountId,
            },
          },
        ],
      },
    });

  const { body } = await updateExec.execute();
  return body;
}

export default cancelDiscount;
