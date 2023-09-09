import fetch from 'node-fetch';
import {
  ClientBuilder,
  AnonymousAuthMiddlewareOptions,
  HttpMiddlewareOptions,
  Client,
} from '@commercetools/sdk-client-v2';
import { region, projectKey, clientId, clientSecret, scopes } from './config';
// import TokenStorage from './TokenStorage';

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${region}.commercetools.com`,
  fetch,
};

// export const token = new TokenStorage();

const createMiddlewareOptions = (): AnonymousAuthMiddlewareOptions => ({
  host: `https://auth.${region}.commercetools.com`,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes,
  fetch,
});

const createClient = (): Client => {
  const middlewareOptions = createMiddlewareOptions();
  return new ClientBuilder()
    .withAnonymousSessionFlow(middlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export const createSignClient = (): Client => {
  const middlewareOptions = createMiddlewareOptions();
  return new ClientBuilder()
    .withClientCredentialsFlow(middlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
};

export default createClient;
