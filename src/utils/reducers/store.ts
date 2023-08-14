import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerReducer';

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
