import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';
import ByInputFilter from './filter/ByInput';
import { setSortMethods } from '../../utils/reducers/productsListReducer';

function Filter(): React.JSX.Element {
  const [sorting, setSorting] = useState({
    sortByPrice: '',
    sortByAbc: '',
  });

  const dispatch = useDispatch();

  const handleSortChange = useCallback(
    (key: keyof typeof sorting) =>
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
    const values = Object.values(sorting).filter(Boolean);
    dispatch(setSortMethods(values));
  }, [sorting, dispatch]);

  return (
    <div className="w-full flex flex-col gap-8">
      <ByInputFilter />
      <BrandFilter />

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
