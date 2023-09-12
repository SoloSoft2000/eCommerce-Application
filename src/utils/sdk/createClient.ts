import fetch from 'node-fetch';
import {
  ClientBuilder,
  HttpMiddlewareOptions,
  Client,
  AuthMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { region, projectKey, clientId, clientSecret, scopes } from './config';

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${region}.commercetools.com`,
  fetch,
};

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${region}.commercetools.com`,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes,
  fetch,
};

const createClient = (
  authType: 'anonymous' | 'password' = 'anonymous',
  username?: string,
  password?: string
): Client => {
  const clientBuilder = new ClientBuilder().withHttpMiddleware(
    httpMiddlewareOptions
  );

  if (authType === 'anonymous') {
    clientBuilder
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withAnonymousSessionFlow(authMiddlewareOptions);
  } else if (authType === 'password') {
    if (!username || !password) {
      throw new Error('Username and password are required for password flow.');
    }

    const passwordOptions: PasswordAuthMiddlewareOptions = {
      host: `https://auth.${region}.commercetools.com`,
      projectKey,
      credentials: {
        clientId,
        clientSecret,
        user: {
          username,
          password,
        },
      },
      scopes,
      fetch,
    };

    clientBuilder
      .withAnonymousSessionFlow(authMiddlewareOptions)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withPasswordFlow(passwordOptions);
  }

  return clientBuilder.build();
};

export default createClient;
