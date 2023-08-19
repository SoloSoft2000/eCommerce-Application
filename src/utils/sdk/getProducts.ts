import {
  createApiBuilderFromCtpClient,
  Product,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function getProducts(): Promise<Product[]> {
  const ctpClient = createClient();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  const productQuery = apiRoot.products().get();

  const response = await productQuery.execute();
  return response.body.results;
}

export default getProducts;
