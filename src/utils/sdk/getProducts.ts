import {
  createApiBuilderFromCtpClient,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function getProducts(): Promise<ProductProjection[]> {
  const ctpClient = createClient();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  const productQuery = apiRoot.productProjections().get();

  const response = await productQuery.execute();
  return response.body.results;
}

export default getProducts;
