import fetch from 'node-fetch';
import {
  ClientBuilder,
  type PasswordAuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import {
  createApiBuilderFromCtpClient,
  Customer,
} from '@commercetools/platform-sdk';

async function getCustomers(
  username: string,
  password: string
): Promise<Customer> {
  const region = 'europe-west1.gcp';
  const projectKey = 'ecommerce-jsfe2023q1';
  const scopes = [
    `manage_my_orders:${projectKey}`,
    `view_published_products:${projectKey}`,
    `create_anonymous_token:${projectKey}`,
    `manage_my_profile:${projectKey}`,
    `view_categories:${projectKey}`,
    `manage_my_shopping_lists:${projectKey}`,
  ];

  const hostAuth = `https://auth.${region}.commercetools.com`;
  const authMiddlewareOptions: PasswordAuthMiddlewareOptions = {
    host: hostAuth,
    projectKey,
    credentials: {
      clientId: 'Jq4_O4966hagz9nm_ubJM63z',
      clientSecret: 'QJ8zfquBO88097yRJQbuWkFVLdV95QVT',
      user: {
        username,
        password,
      },
    },
    scopes,
    fetch,
  };

  const hostApi = `https://api.${region}.commercetools.com`;
  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: hostApi,
    fetch,
  };

  const ctpClient = new ClientBuilder()
    .withPasswordFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });

  const apiExec = apiRoot.me().get().execute();

  const customer = await apiExec.then((response) => response);

  return customer.body;
}

export default getCustomers;
