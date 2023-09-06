import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';
import { projectKey } from './config';
import createClient from './createClient';

function createApiRoot(): ByProjectKeyRequestBuilder {
  const ctpClient = createClient();
  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey,
  });
  return apiRoot;
}

export default createApiRoot;
