import { createSlice } from '@reduxjs/toolkit';

type DataProducts = {
  category: string;
  sort: {
    sortByAbc: string;
    sortByPrice: string;
  };
  brand: string[];
  style: string[];
  price: number[];
  text: string;
  crumb: string | null;
};

const initialState: DataProducts = {
  category: '',
  sort: {
    sortByAbc: '',
    sortByPrice: '',
  },
  brand: [],
  style: [],
  price: [],
  text: '',
  crumb: null,
};

type ActionType<T> = {
  payload: T;
  type: string;
};

const createSetReducer =
  <T>(property: keyof DataProducts) =>
  (state: DataProducts, action: ActionType<T>): DataProducts => ({
    ...state,
    [property]: action.payload,
  });

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: createSetReducer('category'),
    setSortMethods: createSetReducer('sort'),
    setPriceRange: createSetReducer('price'),
    setTextMethods: createSetReducer('text'),
    setBrands: createSetReducer('brand'),
    setStyles: createSetReducer('style'),
    setBreadcrumb: createSetReducer('crumb'),
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
  setBrands,
  setStyles,
  setBreadcrumb,
  clearSelectedBreadcrumb,
} = productsSlice.actions;

export default productsSlice.reducer;
