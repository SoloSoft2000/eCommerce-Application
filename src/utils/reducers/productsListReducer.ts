import { createSlice } from '@reduxjs/toolkit';

type DataProducts = {
  category: '';
  sort: string[];
  data: [] | null;
};

const initialState: DataProducts = {
  category: '',
  sort: [],
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
    setSortMethods: (state, action) => ({
      ...state,
      sort: action.payload,
    }),
  },
});

export const { setProductsArray, setCategory, setSortMethods } =
  productsSlice.actions;

export default productsSlice.reducer;
