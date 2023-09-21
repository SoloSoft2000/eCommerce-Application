import returnProductById from '../src/utils/sdk/getDetailedProduct';

type MockReturnValue = {
  productProjections: () => {
    withId: () => {
      get: () => {
        execute: () => {
          body: {
            id: string;
          };
        };
      };
    };
  };
};

jest.mock('../src/utils/sdk/createApiRoot', () => (): MockReturnValue => ({
  productProjections: () => ({
    withId: jest.fn(() => ({
      get: jest.fn(() => ({
        execute: jest.fn(() => ({
          body: { id: '123' }
        })),
      })),
    })),
  }),
}));


describe('returnProductById', () => {
  it('should return a product when the product ID is provided', async () => {
    const productId = '123'; 
    const result: { id: string } = await returnProductById(productId);
    expect(result.id).toBe(productId); 
    expect(result).toBeDefined(); 
  });
});
