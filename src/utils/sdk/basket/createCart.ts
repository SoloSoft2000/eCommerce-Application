import { Cart, CartDraft, Customer } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function createCart(customer?: Customer): Promise<Cart> {
  const apiRoot = createApiRoot();

  const cartDraft: CartDraft = {
    currency: 'USD',
    customerId: customer?.id,
  };

  const cartExec = apiRoot.carts().post({ body: cartDraft });
  const { body } = await cartExec.execute();
  return body;
}

export default createCart;
