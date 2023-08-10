import React from 'react';

function Country(): React.JSX.Element {
  return (
    <div className="w-full sm:w-[47%]">
      <select
        name="country"
        className="w-full border-b-2 border-zinc-200 py-[0.95rem] px-1"
      >
        <option value="" className="text-gray-400">
          Country*
        </option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      <p className="text-xs text-red-500 h-3"></p>
    </div>
  );
}

export default Country;
