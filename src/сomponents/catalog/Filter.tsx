import React from 'react';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';

function Filter(): React.JSX.Element {
  return (
    <div className="w-1/4 flex flex-col gap-8">
      <input
        type="text"
        className="border-2 border-zinc-200 p-2 w-full rounded"
        placeholder="Type a name..."
      />

      <BrandFilter />

      <select className="w-full py-2 border-b-2 border-zinc-200">
        <option value="">Sort by alphabet</option>
        <option>Name: A-Z</option>
        <option>Name: Z-A</option>
      </select>

      <select className="w-full py-2 border-b-2 border-zinc-200">
        <option value="">Sort by Price</option>
        <option>Price: Low to High</option>
        <option>Price: Hight to Low</option>
      </select>
      <PriceFilter />
    </div>
  );
}

export default Filter;
