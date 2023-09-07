import { Cart, CartDraft, Customer } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function createCart(): Promise<Cart> {
  const apiRoot = createApiRoot();

  const savedCustomer = localStorage.getItem('CT-Customer-SignIn');
  let cartDraft: CartDraft = {
    currency: 'USD',
    taxMode: 'Disabled',
  };

  if (savedCustomer) {
    const customer: Customer = JSON.parse(savedCustomer);
    cartDraft = {
      ...cartDraft,
      customerId: customer.id,
    };
  }

  const cartExec = apiRoot.carts().post({ body: cartDraft });
  const { body } = await cartExec.execute();
  if (!savedCustomer) {
    sessionStorage.setItem('CT-Cart-AnonymID', body.id);
  }
  return body;
}

export default createCart;
