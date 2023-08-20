import {
  createApiBuilderFromCtpClient,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { projectKey } from './config';
import createClient from './createClient';
import setDataElements from './utils/handleProductData';

async function getProducts(): Promise<ProductProjection[]> {
  const ctpClient = createClient();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  const productQuery = apiRoot.productProjections().get();

  const response = await productQuery.execute();
  return response.body.results;
}

async function fetchData(): Promise<void> {
  try {
    const products = await getProducts();
    setDataElements(products);
  } catch (err) {
    console.log('Error fetching products:', err);
  }
}

export default fetchData;
