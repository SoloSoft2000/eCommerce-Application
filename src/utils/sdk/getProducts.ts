import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';
import getProducstCategories from './getProductsCategories';
import { ProductCardProps } from '../../helpers/interfaces/catalog/catalog-props';

const apiRoot = createApiRoot();

type ProductList = {
  catalog?: ProductCardProps[];
  category?: string;
  sort?: string[];
  priceRange: number[];
  text?: string;
  brand?: string[];
  style?: string[];
  limitElements?: number;
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

function generateFilter(
  attributeName: string,
  values: string[],
  filters: string[]
): void {
  if (values && values.length > 0) {
    const formattedValues = values.map((el: string) => `"${el}"`).join(',');
    filters.push(`variants.attributes.${attributeName}:${formattedValues}`);
  }
}

async function getProducts({
  category,
  sort,
  priceRange,
  text,
  brand,
  style,
  limitElements,
}: ProductList): Promise<{
  results: ProductProjection[];
  total: number | undefined;
}> {
  const filters: string[] = [];

  const queryArgs: Record<string, string | number | string[] | boolean> = {
    limit: limitElements || 2,
  };

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

  if (brand && brand.length > 0) {
    generateFilter('attribute-brand', brand, filters);
  }

  if (style && style.length > 0) {
    generateFilter('attribute-style', style, filters);
  }
  queryArgs.sort = sort && sort.length > 0 ? sort : ['variants.sku asc.min'];

  if (text) queryArgs['text.en-US'] = `"${text}"`;

  queryArgs.filter = filters;

  const productQuery = apiRoot.productProjections().search().get({
    queryArgs,
  });
  const response = await productQuery.execute();

  return {
    results: response.body.results,
    total: response.body.total,
  };
}

export default getProducts;
export { filterByPriceRange, generateFilter };
