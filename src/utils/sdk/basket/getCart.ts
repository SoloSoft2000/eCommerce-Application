import { Cart } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function getCart(): Promise<Cart> {
  const apiRoot = createApiRoot();

  try {
    const { body } = await apiRoot.me().activeCart().get().execute();
    return body;
  } catch (error) {
    throw new Error('No cart found');
  }
}

export default getCart;
