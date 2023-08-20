import { createSlice } from '@reduxjs/toolkit';

type DataArray = {
  data: [] | null;
};

const initialState: DataArray = {
  data: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsArray: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setProductsArray } = productsSlice.actions;

export default productsSlice.reducer;
