import setProductWithId from '../src/utils/sdk/utils/handleDetailedProductData';

test('setProductWithId is defined and it is a function', () => {
    expect(setProductWithId).toBeDefined();
    expect(typeof setProductWithId).toBe('function');
  });
