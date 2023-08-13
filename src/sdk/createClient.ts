import fetch from 'node-fetch';
import {
  ClientBuilder,
  AuthMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  HttpMiddlewareOptions,
  Client,
} from '@commercetools/sdk-client-v2';
import { region, projectKey, clientId, clientSecret, scopes } from './config';

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${region}.commercetools.com`,
  fetch,
};

const createMiddlewareOptions = (user?: {
  username: string;
  password: string;
}): AuthMiddlewareOptions | PasswordAuthMiddlewareOptions => ({
  host: `https://auth.${region}.commercetools.com`,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
    ...(user ? { user } : {}),
  },
  scopes,
  fetch,
});

const createClient = (user?: {
  username: string;
  password: string;
}): Client => {
  const middlewareOptions = createMiddlewareOptions(user);
  if (user) {
    return new ClientBuilder()
      .withPasswordFlow(<PasswordAuthMiddlewareOptions>middlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .build();
  }
  return new ClientBuilder()
    .withClientCredentialsFlow(middlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export default createClient;
