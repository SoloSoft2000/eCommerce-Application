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

  const productQuery2 = apiRoot.productProjections().get({
    queryArgs: { limit: 4 },
  });

  const response = await productQuery.execute();
  const response2 = await productQuery2.execute();
  console.log(response2.body.results);
  return response.body.results;
}

export default getProducts;
