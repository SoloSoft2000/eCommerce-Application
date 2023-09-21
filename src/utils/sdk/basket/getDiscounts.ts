import { DiscountCodePagedQueryResponse } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function getDiscounts(): Promise<DiscountCodePagedQueryResponse> {
  const apiRoot = createApiRoot();

  try {
    const { body } = await apiRoot.discountCodes().get().execute();
    return body;
  } catch (error) {
    throw new Error('No discounts found');
  }
}

export default getDiscounts;
