import { generateFilter } from '../src/utils/sdk/getProducts';

describe('generateFilter', () => {
  it('should add a filter when values are provided', () => {
    const attributeName = 'brand';
    const values = ['fashion', 'NY'];
    const filters: string[] = [];

    generateFilter(attributeName, values, filters);

    expect(filters).toEqual(['variants.attributes.brand:"fashion","NY"']);
  });
});
