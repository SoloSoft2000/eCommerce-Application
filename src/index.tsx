import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import './assets/favicon.ico';
import App from './App';
import store from './utils/reducers/store';
import { clearCustomer, setCustomer } from './utils/reducers/customerReducer';
import NotificationProvider from './utils/notification/NotificationProvider';
import createApiRoot from './utils/sdk/createApiRoot';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

const apiRoot = createApiRoot();
apiRoot
  .me()
  .get()
  .execute()
  .then((res) => store.dispatch(setCustomer(res.body)))
  .catch(() => store.dispatch(clearCustomer()));

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </BrowserRouter>
  </Provider>
);
