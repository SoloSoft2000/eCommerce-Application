import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import store from './reducers/store';
import { setCustomer } from './reducers/customerReducer';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

const savedCustomer = localStorage.getItem('CT-Customer-SignIn');
if (savedCustomer) {
  const res = JSON.parse(savedCustomer)
  store.dispatch(setCustomer(res));
}

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
