import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function getProducts({
  category,
  sort,
}: {
  category?: string;
  sort?: string[];
}): Promise<ProductProjection[]> {
  const apiRoot = createApiRoot();

  const queryArgs: Record<string, string | number | string[]> = {
    limit: 4,
  };

  if (category && category !== 'All') {
    const {
      body: { results },
    } = await apiRoot.categories().get().execute();

    const mainCategories = results.filter((r) => !r.ancestors.length);

    const categoryId = mainCategories.find(
      (cat) => cat.name['en-US'] === category
    );
    if (categoryId) {
      queryArgs.filter = `categories.id:"${categoryId.id}"`;
    }
  }

  if (sort && sort.length > 0) {
    queryArgs.sort = sort;
  }

  queryArgs.filter = 'variants.price.centAmount:range (* to 10000)';

  const productQuery = apiRoot.productProjections().search().get({
    queryArgs,
  });

  const response = await productQuery.execute();
  console.log(response.body.results);
  return response.body.results;
}

export default getProducts;
