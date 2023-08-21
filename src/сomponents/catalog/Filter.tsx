import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';
import getProducts from '../../utils/sdk/getProducts';
import setDataElements from '../../utils/sdk/utils/handleProductData';
import { setProductsArray } from '../../utils/reducers/productsListReducer';

function Filter(): React.JSX.Element {
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
  };

  const fetchData = useCallback(async () => {
    try {
      const products = await getProducts(sortBy);
      const data = setDataElements(products);
      dispatch(setProductsArray(data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, sortBy]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full sm:w-96 flex flex-col gap-8">
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
