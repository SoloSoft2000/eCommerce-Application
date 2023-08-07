import React from 'react';

function Country(): React.JSX.Element {
  return (
    <select
      name="country"
      className="w-[47%] border-b-2 border-zinc-200 py-3 px-1"
    >
      <option value="" className="text-gray-400">
        Country*
      </option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
    </select>
  );
}

export default Country;
