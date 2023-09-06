import returnProductById from '../src/utils/sdk/getDetailedProduct';

jest.mock('../src/utils/sdk/createApiRoot', () => {
  return () => ({
    productProjections: () => ({
      withId: jest.fn(() => ({
        get: jest.fn(() => ({
          execute: jest.fn(() => ({
            body: {  id: '123' }
          })),
        })),
      })),
    }),
  });
});

describe('returnProductById', () => {
  it('should return a product when the product ID provides', async () => {
    const productId = '123'; 
    const result = await returnProductById(productId);
    expect(result.id).toBe(productId); 
    expect(result).toBeDefined(); 
  });
});