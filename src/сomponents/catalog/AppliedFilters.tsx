import React, { useCallback } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBrands,
  setPriceRange,
  setSortMethods,
  setStyles,
  setTextMethods,
} from '../../utils/reducers/productsListReducer';
import { RootState } from '../../utils/reducers/store';

type AppliedFilters = {
  [key: string]: string;
};

function AppliedFilter({
  name,
  sortMethod,
}: AppliedFilters): React.JSX.Element {
  const productArray = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const updateArrayAndDispatch = useCallback(
    (array: string[], value: string): string[] => {
      const newArray = [...array].filter((item) => item !== value);
      return newArray;
    },
    [productArray]
  );

  const handleFilterClick = useCallback(
    (sortOption: string) => {
      const [option, value] = sortOption.split(':');
      if (option === 'sortByPrice' || option === 'sortByAbc') {
        const sortAr = { ...productArray.sort };
        if (sortOption === 'sortByPrice') sortAr.sortByPrice = '';
        if (sortOption === 'sortByAbc') sortAr.sortByAbc = '';
        dispatch(setSortMethods(sortAr));
      }
      if (option === 'sortByBrand') {
        const newArr = updateArrayAndDispatch(productArray.brand, value);
        dispatch(setBrands(newArr));
      }
      if (option === 'sortByStyle') {
        const newStyleArr = updateArrayAndDispatch(productArray.style, value);
        dispatch(setStyles(newStyleArr));
      }
      if (option === 'sortByPriceRange') dispatch(setPriceRange([]));
      if (option === 'sortByText') dispatch(setTextMethods(''));
    },
    [dispatch, productArray]
  );

  return (
    <div
      className="flex justify-berween gap-3 p-2 border-2 rounded border-amber-500 cursor-pointer hover:bg-amber-100"
      onClick={(): void => handleFilterClick(sortMethod)}
    >
      <p>{name}</p>
      <span>
        <AiOutlineCloseCircle className="text-amber-500 h-full" />
      </span>
    </div>
  );
}

export default AppliedFilter;
