/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  isShown: boolean;
  value: string;
}

const initialState: PasswordState = {
  isShown: false,
  value: '',
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    togglePassword: (state): void => {
      state.isShown = !state.isShown;
    },
    setPasswordValue: (state, action: PayloadAction<string>): void => {
      state.value = action.payload;
    },
  },
});

export const { togglePassword, setPasswordValue } = passwordSlice.actions;

export default passwordSlice.reducer;
