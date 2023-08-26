import { createSlice } from '@reduxjs/toolkit';

type DataProducts = {
  category: '';
  sort: string[];
  price: number[];
  text: string;
  crumb: string | null;
};

const initialState: DataProducts = {
  category: '',
  sort: [],
  price: [],
  text: '',
  crumb: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
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
    setTextMethods: (state, action) => ({
      ...state,
      text: action.payload,
    }),
    setBreadcrumb: (state, action) => ({
      ...state,
      crumb: action.payload,
    }),
    clearSelectedBreadcrumb: (state) => ({
      ...state,
      crumb: null,
    }),
  },
});

export const {
  setCategory,
  setSortMethods,
  setPriceRange,
  setTextMethods,
  setBreadcrumb,
  clearSelectedBreadcrumb,
} = productsSlice.actions;

export default productsSlice.reducer;
