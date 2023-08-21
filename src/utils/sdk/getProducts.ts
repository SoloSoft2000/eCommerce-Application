import {
  createApiBuilderFromCtpClient,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function getProducts({
  cat,
  sort,
}: {
  cat?: string;
  sort?: string;
}): Promise<ProductProjection[]> {
  const ctpClient = createClient();
  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  // const productQuery = apiRoot.productProjections().get();

  const queryArgs: Record<string, string | number> = {
    limit: 4,
  };

  if (cat) {
    const cats = await apiRoot.categories().get().execute();
    console.log(cats);

    queryArgs.filter = 'categories.id:"b6388f42-af47-4d33-b472-7c88a9103357"';
  }

  if (sort) {
    queryArgs.sort = `name.en-Us ${sort}`;
  }

  const productQuery = apiRoot.productProjections().search().get({
    queryArgs,
  });

  const response = await productQuery.execute();
  // const response2 = await productQuery2.execute();
  // console.log(response2.body);
  return response.body.results;
}

export default getProducts;
