import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

const apiRoot = createApiRoot();

type ProductList = {
  category?: string;
  sort?: string[];
  priceRange: number[];
  text?: string;
};

async function getProducstByCategory(
  category: string
): Promise<string | undefined> {
  const {
    body: { results },
  } = await apiRoot.categories().get().execute();

  const mainCategories = results.filter((r) => !r.ancestors.length);

  const categoryId = mainCategories.find(
    (cat) => cat.name['en-US'] === category
  );
  return categoryId?.id;
}

function filterByPriceRange(priceRange: number[]): string | null {
  if (priceRange && priceRange.length > 0) {
    const [min, max] = priceRange;
    const minValueInCents: number = min ? min * 100 : 0;
    const maxValueInCents: string | number = max ? max * 100 : '*';

    return `variants.price.centAmount:range (${minValueInCents} to ${maxValueInCents})`;
  }

  return null;
}

async function getProducts({
  category,
  sort,
  priceRange,
  text,
}: ProductList): Promise<ProductProjection[]> {
  const filters: string[] = [];

  const queryArgs: Record<string, string | number | string[]> = {
    limit: 20,
  };

  if (text) {
    queryArgs['text.en-US'] = `"${text}"`;
  }

  if (category && category !== 'All') {
    const categoryId = await getProducstByCategory(category);
    if (categoryId) filters.push(`categories.id:"${categoryId}"`);
    filters.push(
      `categories.id:subtree("21a865a4-69d0-4350-9f14-042414653c37")`
    );
  }

  if (priceRange && priceRange.length > 0) {
    const priceRangeFilter = filterByPriceRange(priceRange);
    if (priceRangeFilter) filters.push(priceRangeFilter);
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
