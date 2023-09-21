import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';
import { projectKey } from './config';
import createClient from './createClient';

const createApiRoot = ((): ((
  authType?: 'anonymous' | 'password',
  username?: string,
  password?: string
) => ByProjectKeyRequestBuilder) => {
  let cachedCtpClient: ReturnType<typeof createClient> | null = null;
  let cachedApiRoot: ByProjectKeyRequestBuilder | null = null;
  let currentAuthType: 'anonymous' | 'password' | undefined;

  return (
    authType: 'anonymous' | 'password' = currentAuthType || 'anonymous',
    username?: string,
    password?: string
  ): ByProjectKeyRequestBuilder => {
    if (authType !== currentAuthType) {
      cachedCtpClient = null;
      cachedApiRoot = null;
      currentAuthType = authType;
    }

    if (!cachedCtpClient) {
      cachedCtpClient = createClient(authType, username, password);
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
