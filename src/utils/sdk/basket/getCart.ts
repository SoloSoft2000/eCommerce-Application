import { Cart, Customer } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function getCart(): Promise<Cart> {
  const apiRoot = createApiRoot();

  let cart;
  const savedCustomer = localStorage.getItem('CT-Customer-SignIn');
  if (savedCustomer) {
    const customer: Customer = JSON.parse(savedCustomer);
    cart = apiRoot.carts().withCustomerId({ customerId: customer.id }).get();
  }

  const savedAnonymCard = sessionStorage.getItem('CT-Cart-AnonymID');
  if (savedAnonymCard) {
    cart = apiRoot.carts().withId({ ID: savedAnonymCard }).get();
  }

  if (!cart) {
    throw new Error('No cart found');
  }

  const { body } = await cart.execute();
  return body;
}

export default getCart;
