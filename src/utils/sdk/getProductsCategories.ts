import { Category } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

const apiRoot = createApiRoot();
export interface CategoryTree extends Category {
  children?: Category[];
}

function categoryTree(categories: Category[]): CategoryTree[] {
  const map = new Map<string, CategoryTree>();
  categories.forEach((category) => {
    map.set(category.id, { ...category, children: [] });
  });
  const rootCat: CategoryTree[] = [];

  map.forEach((category) => {
    if (category.parent) {
      const parent = map.get(category.parent.id);
      if (parent) parent.children?.push(category);
    } else {
      rootCat.push(category);
    }
  });
  return rootCat;
}

async function getProducstCategories(): Promise<CategoryTree[]> {
  const {
    body: { results },
  } = await apiRoot.categories().get().execute();

  const mainCategories = results;

  const categoryTrees = categoryTree(mainCategories);
  return categoryTrees;
}

export default getProducstCategories;
