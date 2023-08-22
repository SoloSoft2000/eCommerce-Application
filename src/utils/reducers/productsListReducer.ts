import { createSlice } from '@reduxjs/toolkit';

type DataProducts = {
  category: '';
  data: [] | null;
};

const initialState: DataProducts = {
  category: '',
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
    setCategory: (state, action) => ({
      ...state,
      category: action.payload,
    }),
  },
});

export const { setProductsArray, setCategory } = productsSlice.actions;

export default productsSlice.reducer;
