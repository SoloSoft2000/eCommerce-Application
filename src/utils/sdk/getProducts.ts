import {
  createApiBuilderFromCtpClient,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function getProducts(sort?: string): Promise<ProductProjection[]> {
  const ctpClient = createClient();
  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  // const productQuery = apiRoot.productProjections().get();

  const queryArgs: Record<string, string | number> = {
    limit: 4,
  };

  if (sort) {
    queryArgs.sort = `name.en-Us ${sort}`;
  }

  const productQuery = apiRoot.productProjections().get({
    queryArgs,
  });

  const response = await productQuery.execute();
  // const response2 = await productQuery2.execute();
  // console.log(response2.body);
  return response.body.results;
}

export default getProducts;
