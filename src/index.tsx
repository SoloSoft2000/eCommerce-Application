import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import userReducer from './reducers/userReducer';
import apiRoot from './sdk/client';
import getCustomers from './sdk/getCustomers';



apiRoot
  .productProjections()
  .get()
  .execute()
  .then((data) => console.log('products=', data)) //eslint-disable-line
  .catch(console.error); //eslint-disable-line


 getCustomers('sowa4il@gmail.com', 'JS&dontStop2023q1')
  .then((data) => console.log('customers=', data)) //eslint-disable-line
  .catch((err)  => console.error(err)); //eslint-disable-line



const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
