import { ProductProjection } from '@commercetools/platform-sdk';
import createApiRoot from './createApiRoot';

const id = 'd6ac30db-0b36-47c7-8988-921d67203f7f';
  
 async function returnProductById(): Promise<ProductProjection> {
   const apiRoot = createApiRoot();
   const res = await apiRoot.productProjections().withId({ ID: id }).get().execute();
   return res.body;
  }
  
  export default returnProductById;
  



