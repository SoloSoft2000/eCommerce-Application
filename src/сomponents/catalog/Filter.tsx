import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';
import { setSortMethods } from '../../utils/reducers/productsListReducer';

function Filter(): React.JSX.Element {
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    dispatch(setSortMethods(selectedSort));
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <input
        type="text"
        className="border-2 border-zinc-200 p-2 w-full rounded"
        placeholder="Type a name..."
      />

      <BrandFilter />

      <label className="block font-bold">
        Sort by alphabet:
        <select
          className="w-full py-2 border-b-2 font-base border-zinc-200 font-normal text-orange-500"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Sort: Random</option>
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </label>

      <label className="block font-bold">
        Sort by Price
        <select className="w-full py-2 border-b-2 border-zinc-200 font-normal text-orange-500">
          <option value="">Sort: Random</option>
          <option>Price: Low to High</option>
          <option>Price: Hight to Low</option>
        </select>
      </label>

      <PriceFilter />
    </div>
  );
}

export default Filter;
