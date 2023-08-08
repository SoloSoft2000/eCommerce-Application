import React from 'react';

function BirtdayDate(): React.JSX.Element {
  return (
    <div className="w-full sm:w-[48%]">
      <div className="w-full border-b-2 border-zinc-200 py-3">
        <label htmlFor="birthday" className="text-gray-400 mr-1">
          Date of birth*
        </label>
        <input type="date" name="birthday" defaultValue="2000-05-27" />
      </div>
      <p className="text-xs text-red-500 h-3"></p>
    </div>
  );
}

export default BirtdayDate;
