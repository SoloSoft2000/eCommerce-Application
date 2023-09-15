import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 0;

const cartCountSlice = createSlice({
  name: 'cartCount',
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      const newState = action.payload;
      return newState;
    },
  },
});

export const { setCartCount } = cartCountSlice.actions;

export default cartCountSlice.reducer;
