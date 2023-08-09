import fetch from 'node-fetch';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
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

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: 'Jq4_O4966hagz9nm_ubJM63z',
    clientSecret: 'QJ8zfquBO88097yRJQbuWkFVLdV95QVT',
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();

export default ctpClient;
