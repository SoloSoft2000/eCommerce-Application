import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

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

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${region}.commercetools.com`,
  projectKey,
  credentials: {
    clientId: 'Jq4_O4966hagz9nm_ubJM63z',
    clientSecret: 'QJ8zfquBO88097yRJQbuWkFVLdV95QVT',
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${region}.commercetools.com`,
  fetch,
};

const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export default ctpClient;
