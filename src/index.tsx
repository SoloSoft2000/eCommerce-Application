import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const root = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

if (!root) {
  throw new Error('No root element found');
}

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
