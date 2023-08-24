import { createSlice } from '@reduxjs/toolkit';

type DataProducts = {
  category: '';
  sort: string[];
  data: [] | null;
  price: number[];
};

const initialState: DataProducts = {
  category: '',
  sort: [],
  data: null,
  price: [],
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
    setPriceRange: (state, action) => ({
      ...state,
      price: action.payload,
    }),
  },
});

export const { setProductsArray, setCategory, setSortMethods, setPriceRange } =
  productsSlice.actions;

export default productsSlice.reducer;
