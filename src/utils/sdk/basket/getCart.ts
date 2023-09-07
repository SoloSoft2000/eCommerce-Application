import { Cart, Customer } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function getCart(): Promise<Cart> {
  const apiRoot = createApiRoot();

  const savedCustomer = localStorage.getItem('CT-Customer-SignIn');
  if (savedCustomer) {
    const customer: Customer = JSON.parse(savedCustomer);
    const cart = apiRoot
      .carts()
      .withCustomerId({ customerId: customer.id })
      .get();
    const { body } = await cart.execute();
    return body;
  }

  const savedAnonymCard = sessionStorage.getItem('CT-Cart-AnonymID');
  if (savedAnonymCard) {
    const cart = apiRoot.carts().withId({ ID: savedAnonymCard }).get();
    const { body } = await cart.execute();
    return body;
  }

  throw new Error('Neither customer nor anonym cart found.');
}

export default getCart;
