import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

async function getProducts({
  category,
  sort,
  priceRange,
  text,
}: {
  category?: string;
  sort?: string[];
  priceRange: number[];
  text?: string;
}): Promise<ProductProjection[]> {
  const apiRoot = createApiRoot();
  const filters: string[] = [];

  const queryArgs: Record<string, string | number | string[]> = {
    limit: 20,
  };

  if (text) {
    queryArgs['text.en-US'] = `"${text}"`;
  }

  if (category && category !== 'All') {
    const {
      body: { results },
    } = await apiRoot.categories().get().execute();

    const mainCategories = results.filter((r) => !r.ancestors.length);

    const categoryId = mainCategories.find(
      (cat) => cat.name['en-US'] === category
    );
    if (categoryId) filters.push(`categories.id:"${categoryId.id}"`);
  }

  if (priceRange && priceRange.length > 0) {
    const [min, max] = priceRange;
    const minValueInCents: number = min ? min * 100 : 0;
    const maxValueInCents: string | number = max ? max * 100 : '*';

    filters.push(
      `variants.price.centAmount:range (${minValueInCents} to ${maxValueInCents})`
    );
  }

  if (sort && sort.length > 0) queryArgs.sort = sort;
  queryArgs.filter = filters;

  const productQuery = apiRoot.productProjections().search().get({
    queryArgs,
  });

  const response = await productQuery.execute();
  console.log(response.body.results);
  return response.body.results;
}

export default getProducts;
