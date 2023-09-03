import { filterByPriceRange } from '../src/utils/sdk/getProducts';

describe('filterByPriceRange', () => {
  it('should add a filter for price range', () => {
    const filters1 = filterByPriceRange([10, 100]);
    const filters2 = filterByPriceRange([]);
    expect(filters1).toEqual('variants.price.centAmount:range (1000 to 10000)');
    expect(filters2).toEqual(null);
  });
});
