import {
  createApiBuilderFromCtpClient,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';

async function getProducts({
  category,
  sort,
}: {
  category?: string;
  sort?: string;
}): Promise<ProductProjection[]> {
  const ctpClient = createClient();
  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });
  console.log(category);

  const queryArgs: Record<string, string | number> = {
    limit: 4,
  };

  if (category && category !== 'All') {
    const categoriesId: { [key: string]: string } = {
      Earrings: 'b6388f42-af47-4d33-b472-7c88a9103357',
      Rings: '2bc99d45-3bf9-4c80-9a14-ebb97da4b8c5',
      Necklace: '2397ffc6-1185-4424-a64d-154aef6f9b93',
    };

    queryArgs.filter = `categories.id:"${categoriesId[category]}"`;
  }

  if (sort) {
    queryArgs.sort = `name.en-Us ${sort}`;
  }

  const productQuery = apiRoot.productProjections().search().get({
    queryArgs,
  });

  const response = await productQuery.execute();
  // const response2 = await productQuery2.execute();
  console.log(response.body.results);
  return response.body.results;
}

export default getProducts;
