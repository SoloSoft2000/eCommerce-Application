import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import store from './reducers/store';

// import apiRoot from './sdk/client';

// apiRoot
//   .productProjections()
//   .get()
//   .execute()
//   .then((data) => console.log('products=', data)) //eslint-disable-line
//   .catch(console.error); //eslint-disable-line

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
