import { DiscountCode } from '@commercetools/platform-sdk';
import createApiRoot from '../createApiRoot';

async function getDiscountById(id: string): Promise<DiscountCode> {
  const apiRoot = createApiRoot();

  try {
    const { body } = await apiRoot
      .discountCodes()
      .withId({ ID: id })
      .get()
      .execute();
    return body;
  } catch (error) {
    throw new Error('No discounts found');
  }
}

export default getDiscountById;
