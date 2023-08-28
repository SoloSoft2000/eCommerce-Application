import createApiRoot from './createApiRoot';

const apiRoot = createApiRoot();

async function getProducstCategories(): Promise<string[]> {
  const {
    body: { results },
  } = await apiRoot.categories().get().execute();

  // const mainCategories = results.filter((r) => !r.ancestors.length);

  const mainCategories = results;
  const categories = mainCategories.map((cat) => cat.name['en-US']);
  console.log(categories);
  return categories;
}

export default getProducstCategories;
