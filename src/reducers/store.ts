import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordReduce';

const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
