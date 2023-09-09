import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';
import { projectKey } from './config';
import createClient, { createSignClient } from './createClient';

const createApiRoot = ((): (() => ByProjectKeyRequestBuilder) => {
  let cachedCtpClient: ReturnType<typeof createClient> | null = null;
  let cachedApiRoot: ByProjectKeyRequestBuilder | null = null;

  return (): ByProjectKeyRequestBuilder => {
    if (!cachedCtpClient) {
      cachedCtpClient = createClient();
    }

    if (!cachedApiRoot) {
      cachedApiRoot = createApiBuilderFromCtpClient(
        cachedCtpClient
      ).withProjectKey({
        projectKey,
      });
    }
    return cachedApiRoot;
  };
})();

export const createApiSignRoot = ((): ((
  changeMode?: boolean
) => ByProjectKeyRequestBuilder) => {
  let cachedCtpClient: ReturnType<typeof createClient> | null = null;
  let cachedApiRoot: ByProjectKeyRequestBuilder | null = null;
  let currMode: 'anonym' | 'sign' = 'anonym';

  return (changeMode?: boolean): ByProjectKeyRequestBuilder => {
    if (changeMode) {
      if (currMode === 'anonym') {
        cachedCtpClient = createSignClient();
        currMode = 'sign';
      } else {
        cachedCtpClient = createClient();
        currMode = 'anonym';
      }
    }

    if (!cachedCtpClient) {
      cachedCtpClient = createClient();
    }

    if (!cachedApiRoot) {
      cachedApiRoot = createApiBuilderFromCtpClient(
        cachedCtpClient
      ).withProjectKey({
        projectKey,
      });
    }
    return cachedApiRoot;
  };
})();

export default createApiRoot;
