import { Cart, MyCartDraft } from '@commercetools/platform-sdk';
import { ApiRequest } from '@commercetools/platform-sdk/dist/declarations/src/generated/shared/utils/requests-utils';
import { createApiSignRoot } from '../createApiRoot';

async function createCart(): Promise<Cart> {
  const apiRoot = createApiSignRoot();

  const savedCustomer = localStorage.getItem('CT-Customer-SignIn');
  const cartDraft: MyCartDraft = {
    currency: 'USD',
  };

  const cartExec: ApiRequest<Cart> = apiRoot
    .me()
    .carts()
    .post({ body: cartDraft });
  const { body } = await cartExec.execute();
  if (!savedCustomer) {
    sessionStorage.setItem('CT-Cart-AnonymID', body.id);
  } else {
    localStorage.setItem('CT-Cart-CustomerID', body.id);
  }
  return body;
}

export default createCart;
