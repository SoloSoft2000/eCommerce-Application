import { createSlice } from '@reduxjs/toolkit';

type DataArray = {
  data: [];
};

const initialState: DataArray = {
  data: [],
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
