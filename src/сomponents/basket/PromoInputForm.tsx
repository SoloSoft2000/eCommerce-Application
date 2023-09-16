import React, { useState } from 'react';
import addDiscount from '../../utils/sdk/basket/addDiscount';

interface PromoInputFormProps {
  onPromoApplied: () => void;
}

function PromoInputForm({
  onPromoApplied,
}: PromoInputFormProps): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const applyDiscount = (): void => {
    addDiscount(inputValue)
      .then(() => {
        setInputValue('');
        onPromoApplied();
      })
      .catch(console.error);
  };

  return (
    <div className="ml-[5%] mb-8">
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
        onClick={applyDiscount}
        disabled={!inputValue}
        className="w-1/6 max-xl:w-2/6 max-sm:m-1 text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer"
      >
        Apply promo
      </button>
    </div>
  );
}

export default PromoInputForm;
