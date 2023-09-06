import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange } from '../../../utils/reducers/productsListReducer';
import { RootState } from '../../../utils/reducers/store';

function PriceFilter(): React.JSX.Element {
  const dispatch = useDispatch();
  const priceArray = useSelector((state: RootState) => state.products.price);

  const [priceMin, priceMax] = priceArray;
  const [minPrice, setMinPrice] = useState<number | ''>(priceMin || '');
  const [maxPrice, setMaxPrice] = useState<number | ''>(priceMax || '');

  const handlePrice = useCallback(() => {
    dispatch(setPriceRange([minPrice, maxPrice]));
  }, [dispatch, minPrice, maxPrice]);

  useEffect(() => {
    setMinPrice(priceMin || '');
    setMaxPrice(priceMax || '');
  }, [priceArray]);

  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-2">Price Range:</label>
      <div className="flex justify-between items-center flex-nowrap gap-3">
        <input
          type="number"
          placeholder="Min"
          className="border p-1 w-[30%]"
          value={minPrice}
          onChange={(e): void => setMinPrice(+e.target.value)}
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Max"
          className="border p-1 w-[30%]"
          value={maxPrice}
          onChange={(e): void => setMaxPrice(+e.target.value)}
        />
        <button
          className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded w-[30%]"
          onClick={handlePrice}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default PriceFilter;
