import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerReducer';
import productsReducer from './productsListReducer';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
