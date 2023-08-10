import React from 'react';

function BirtdayDate(): React.JSX.Element {
  return (
    <div className="w-full sm:w-[48%]">
      <div className="w-full border-b-2 border-zinc-200 py-3">
        <label htmlFor="birthday" className="text-gray-400 mr-1">
          Date of birth*
        </label>
        <input type="date" name="birthday" />
      </div>
      <p className="text-sm text-red-500 h-5"></p>
    </div>
  );
}

export default BirtdayDate;
