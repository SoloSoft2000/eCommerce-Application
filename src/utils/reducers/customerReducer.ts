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
    setCustomer: (state, action) => {
      const newState = action.payload;
      localStorage.setItem('CT-Customer-SignIn', JSON.stringify(newState));
      return newState;
    },
    clearCustomer: () => {
      localStorage.removeItem('CT-Customer-SignIn');
      localStorage.removeItem('commercetools_token');
      return initialState;
    },
  },
});

export const { setCustomer, clearCustomer } = customerSlice.actions;

export default customerSlice.reducer;
