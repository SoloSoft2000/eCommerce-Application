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

function AppliedFilter({
  name,
  sortMethod,
}: {
  [key: string]: string;
}): React.JSX.Element {
  const productArray = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleFilterClick = useCallback(
    (sortOption: string) => {
      if (sortOption === 'sortByPrice' || sortOption === 'sortByAbc') {
        const sortAr = { ...productArray.sort };
        if (sortOption === 'sortByPrice') sortAr.sortByPrice = '';
        if (sortOption === 'sortByAbc') sortAr.sortByAbc = '';
        dispatch(setSortMethods(sortAr));
      }
      if (sortOption.split(':')[0] === 'sortByBrand') {
        const brandArr = [...productArray.brand];
        const newArr = brandArr.filter(
          (brand) => brand !== sortOption.split(':')[1]
        );
        dispatch(setBrands(newArr));
      }
      if (sortOption.split(':')[0] === 'sortByStyle') {
        const styleArr = [...productArray.style];
        const newStyleArr = styleArr.filter(
          (style) => style !== sortOption.split(':')[1]
        );
        dispatch(setStyles(newStyleArr));
      }
      if (sortOption === 'sortByPriceRange') dispatch(setPriceRange([]));
      if (sortOption === 'sortByText') dispatch(setTextMethods(''));
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
