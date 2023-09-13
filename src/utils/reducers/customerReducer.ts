import { createSlice } from '@reduxjs/toolkit';
import { type Customer } from '@commercetools/platform-sdk';
import createApiRoot from '../sdk/createApiRoot';

const initialState: Customer = {
  id: '',
  version: 0,
  createdAt: '',
  lastModifiedAt: '',
  email: '',
  addresses: [],
  isEmailVerified: false,
  authenticationMode: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      const newState = action.payload;
      return newState;
    },
    clearCustomer: () => {
      sessionStorage.removeItem('commercetools_token');
      const clearApi = createApiRoot('anonymous');
      clearApi.discountCodes().get().execute();
      return initialState;
    },
  },
});

export const { setCustomer, clearCustomer } = customerSlice.actions;

export default customerSlice.reducer;
