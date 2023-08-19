import React from 'react';

function PriceFilter(): React.JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-2">Price Range:</label>
      <div className="flex justify-between items-center flex-nowrap gap-3">
        <input type="number" placeholder="Min" className="border p-1 w-[30%]" />
        <span>-</span>
        <input type="number" placeholder="Max" className="border p-1 w-[30%]" />
        <button className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded w-[30%]">
          OK
        </button>
      </div>
    </div>
  );
}

export default PriceFilter;
