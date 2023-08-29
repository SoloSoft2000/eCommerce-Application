import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';
import getProducstCategories from './getProductsCategories';

const apiRoot = createApiRoot();

type ProductList = {
  category?: string;
  sort?: string[];
  priceRange: number[];
  text?: string;
};

async function getProducstByCategory(
  category: string
): Promise<(string | undefined)[]> {
  const categories = await getProducstCategories();
  const categoriesId: { [key: string]: string } = {
    mainCategory: '',
    subCategory: '',
  };

  categories.forEach((cat) => {
    if (cat.name['en-US'] === category) {
      categoriesId.mainCategory = cat.id;
    }
    if (cat.children) {
      cat.children.forEach((child) => {
        if (child.name['en-US'] === category) {
          categoriesId.mainCategory = cat.id;
          categoriesId.subCategory = child.id;
        }
      });
    }
  });
  return Object.values(categoriesId);
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

  if (category && category !== 'All products') {
    const categoryId = await getProducstByCategory(category);
    if (categoryId[0]) filters.push(`categories.id:"${categoryId[0]}"`);
    if (categoryId[1]) {
      filters.push(`categories.id:subtree("${categoryId[1]}")`);
    }
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
