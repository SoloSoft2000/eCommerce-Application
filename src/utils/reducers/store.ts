import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerReducer';
import productsReducer from './productsListReducer';
import cartCountReducer from './cartCountReducer';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    products: productsReducer,
    cartCount: cartCountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
