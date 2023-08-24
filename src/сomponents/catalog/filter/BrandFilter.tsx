import React from 'react';

function BrandFilter(): React.JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">Material:</label>
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="checkboxA"
          className="form-checkbox h-4 w-4 text-indigo-600"
          value="A"
        />
        <label htmlFor="checkboxA" className="ml-2">
          Gold
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
          Silver
        </label>
      </div>
    </div>
  );
}

export default BrandFilter;
