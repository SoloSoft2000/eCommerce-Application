import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import App from './App';
import store from './reducers/store';

import { projectKey } from './sdk/config';
import createClient from './sdk/createClient';

const ctpClient = createClient();
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey,
});

apiRoot
  .productProjections()
  .get()
  .execute()
  .then(() => console.log)
  .catch(() => console.error);

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
