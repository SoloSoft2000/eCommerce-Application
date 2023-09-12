import { Cart } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function getCart(): Promise<Cart> {
  const apiRoot = createApiRoot();

  try {
    const customCart = localStorage.getItem('CT-Cart-CustomerID');
    if (customCart) {
      const { body } = await apiRoot
        .carts()
        .withId({ ID: customCart })
        .get()
        .execute();
      return body;
    }
    const { body } = await apiRoot.me().activeCart().get().execute();
    return body;
  } catch (error) {
    throw new Error('No cart found');
  }
}

export default getCart;
