import fetch from 'node-fetch';
import {
  ClientBuilder,
  type PasswordAuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

const projectKey = 'ecommerce-jsfe2023q1';
const scopes = [
  'manage_my_orders:ecommerce-jsfe2023q1',
  'view_published_products:ecommerce-jsfe2023q1',
  'create_anonymous_token:ecommerce-jsfe2023q1',
  'manage_my_profile:ecommerce-jsfe2023q1',
  'view_categories:ecommerce-jsfe2023q1',
  'manage_my_shopping_lists:ecommerce-jsfe2023q1',
];

const authMiddlewareOptions: PasswordAuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: 'Jq4_O4966hagz9nm_ubJM63z',
    clientSecret: 'QJ8zfquBO88097yRJQbuWkFVLdV95QVT',
    user: {
      username: 'sowa4il@gmail.com',
      password: 'JS&dontStop2023q1',
    },
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

const ctpClient = new ClientBuilder()
  .withPasswordFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export default ctpClient;
