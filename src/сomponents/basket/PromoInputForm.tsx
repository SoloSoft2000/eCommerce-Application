import React, { useState, useContext } from 'react';
import addDiscount from '../../utils/sdk/basket/addDiscount';
import NotificationContext from '../../utils/notification/NotificationContext';

interface PromoInputFormProps {
  onPromoApplied: () => void;
  isCartEmpty: boolean;
}

function PromoInputForm({
  onPromoApplied, isCartEmpty
}: PromoInputFormProps): React.JSX.Element {
  const showNotification = useContext(NotificationContext);
  const [inputValue, setInputValue] = useState('');

  const applyDiscount = (): void => {
    addDiscount(inputValue)
      .then(() => {
        setInputValue('');
        onPromoApplied();
        showNotification(`The promocode ${inputValue} applied`, 'success');
      })
      .catch(() => {
        showNotification(`The promocode ${inputValue} is not found`, 'error');
      });
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
          disabled= {isCartEmpty}
          onChange={(e): void => setInputValue(e.target.value)}
        />
      </label>
      <button
        onClick={applyDiscount}
        disabled={!inputValue}
        className= {!inputValue ?
         'w-1/6 max-xl:w-2/6 max-sm:m-1 text-xs text-center rounded bg-gray-300 p-2 text-white uppercase drop-shadow-sm' : 
        "w-1/6 max-xl:w-2/6 max-sm:m-1 text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer"}
      >
        Apply promo
      </button>
    </div>
  );
}

export default PromoInputForm;
