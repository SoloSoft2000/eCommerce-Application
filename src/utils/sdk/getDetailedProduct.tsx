import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function returnProductById(
  productId: string
): Promise<ProductProjection> {
  const apiRoot = createApiRoot();
  const res = await apiRoot
    .productProjections()
    .withId({ ID: productId })
    .get()
    .execute();
  return res.body;
}

export default returnProductById;
