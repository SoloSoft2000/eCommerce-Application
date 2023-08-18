import React from 'react';

function Filter(): React.JSX.Element {
  return (
    <div className="w-1/4 flex flex-col gap-4">
      <input
        type="text"
        className="border-2 border-zinc-200 p-2 w-full"
        placeholder="Type a name..."
      />

      <div className="flex flex-col">
        <label className="font-semibold">Brand:</label>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="checkboxA"
            className="form-checkbox h-4 w-4 text-indigo-600"
            value="A"
          />
          <label htmlFor="checkboxA" className="ml-2">
            A
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="checkboxB"
            className="form-checkbox h-4 w-4 text-indigo-600"
            value="B"
          />
          <label htmlFor="checkboxB" className="ml-2">
            B
          </label>
        </div>
      </div>

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

      <div className="flex flex-col">
        <label className="font-semibold mb-2">Price Range:</label>
        <div className="flex justify-between flex-nowrap gap-3">
          <input
            type="number"
            placeholder="Min"
            value="1"
            className="border p-1 w-[30%]"
          />
          <input
            type="number"
            placeholder="Max"
            value="100"
            className="border p-1 w-[30%]"
          />
          <button className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded w-[30%]">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
