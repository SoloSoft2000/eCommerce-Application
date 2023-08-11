import { createSlice } from '@reduxjs/toolkit';
import { type Customer } from '@commercetools/platform-sdk';

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
    setCustomer: (state, action) => action.payload,
    clearCustomer: () => initialState,
  },
});

console.log(customerSlice);

export const { setCustomer, clearCustomer } = customerSlice.actions;

export default customerSlice.reducer;
