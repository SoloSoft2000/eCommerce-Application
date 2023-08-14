import fetch from 'node-fetch';
import {
  ClientBuilder,
  AnonymousAuthMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  HttpMiddlewareOptions,
  Client,
} from '@commercetools/sdk-client-v2';
import { region, projectKey, clientId, clientSecret, scopes } from './config';
import TokenStorage from './TokenStorage';

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${region}.commercetools.com`,
  fetch,
};

export const token = new TokenStorage();

const createMiddlewareOptions = (user?: {
  username: string;
  password: string;
}): AnonymousAuthMiddlewareOptions | PasswordAuthMiddlewareOptions => ({
  host: `https://auth.${region}.commercetools.com`,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
    ...(user ? { user } : {}),
  },
  scopes,
  tokenCache: token,
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
    .withAnonymousSessionFlow(middlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export default createClient;
