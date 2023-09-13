import { Cart, MyCartDraft } from '@commercetools/platform-sdk';
import { ApiRequest } from '@commercetools/platform-sdk/dist/declarations/src/generated/shared/utils/requests-utils';
import createApiRoot from '../createApiRoot';

async function createCart(): Promise<Cart> {
  const apiRoot = createApiRoot();

  const cartDraft: MyCartDraft = {
    currency: 'USD',
  };

  const cartExec: ApiRequest<Cart> = apiRoot
    .me()
    .carts()
    .post({ body: cartDraft });

  const { body } = await cartExec.execute();

  return body;
}

export default createCart;
