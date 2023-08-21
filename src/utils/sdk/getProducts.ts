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
    queryArgs: {
      limit: 4,
      offset: 4,
      sort: 'name.en-Us asc',
      // filter: 'categories.id=2bc99d45-3bf9-4c80-9a14-ebb97da4b8c5',
    },
  });

  const response = await productQuery.execute();
  const response2 = await productQuery2.execute();
  console.log(response2.body);
  return response.body.results;
}

export default getProducts;
