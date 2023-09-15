import React, { useCallback, useState } from 'react';

function PromoInputForm(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const apply = useCallback(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <form className="ml-[5%] mb-8">
      <label className="pr-1">
        <input
          className="border rounded p-1"
          placeholder="Promocode"
          type="text"
          name="name"
          value={inputValue}
          onChange={(e): void => setInputValue(e.target.value)}
        />
      </label>
      <button
        onClick={apply}
        disabled={!inputValue}
        className="w-1/6 max-md:w-2/6 text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer;">
          Apply promo
      </button>
    </form>
  );
}

export default PromoInputForm;
