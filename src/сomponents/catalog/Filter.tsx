import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import StyleFilter from './filter/StyleFilter';
import PriceFilter from './filter/PriceFilter';
import ByInputFilter from './filter/ByInput';
import { setSortMethods } from '../../utils/reducers/productsListReducer';
import BrandFilter from './filter/BrandFilter';

function Filter(): React.JSX.Element {
  const sort = useSelector((state: RootState) => state.products.sort);

  const [sorting, setSorting] = useState({
    sortByPrice: sort.sortByPrice || '',
    sortByAbc: sort.sortByAbc || '',
  });

  const dispatch = useDispatch();

  const handleSortChange = useCallback(
    (key: string) =>
      (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedValue = e.target.value;
        setSorting((prevSorting) => ({
          ...prevSorting,
          [key]: selectedValue,
        }));
      },
    []
  );

  useEffect(() => {
    setSorting(() => sort);
  }, [sort, dispatch]);

  useEffect(() => {
    dispatch(setSortMethods(sorting));
  }, [sorting, dispatch]);

  return (
    <div className="w-full flex flex-col gap-8">
      <ByInputFilter />
      <BrandFilter />
      <StyleFilter />
      <label className="block font-bold">
        Sort by alphabet:
        <select
          className="w-full py-2 border-b-2 font-base border-zinc-200 font-normal text-orange-500"
          value={sorting.sortByAbc}
          onChange={handleSortChange('sortByAbc')}
        >
          <option value="">Sort: Random</option>
          <option value="name.en-Us asc">Sort: A-Z</option>
          <option value="name.en-Us desc">Sort: Z-A</option>
        </select>
      </label>
      <label className="block font-bold">
        Sort by Price
        <select
          className="w-full py-2 border-b-2 border-zinc-200 font-normal text-orange-500"
          value={sorting.sortByPrice}
          onChange={handleSortChange('sortByPrice')}
        >
          <option value="">Sort: Random</option>
          <option value="price asc">Price: Low to High</option>
          <option value="price desc">Price: Hight to Low</option>
        </select>
      </label>
      <PriceFilter />
    </div>
  );
}

export default Filter;
