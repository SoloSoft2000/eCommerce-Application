import React, { useState, useCallback } from 'react';
import { QuantitySpinnerProps } from '../../helpers/interfaces/basket/quantity-spinner-props';

const QuantitySpinner: React.FC<QuantitySpinnerProps> = ({
  min,
  max,
  quantity,
  whenQuantityChange,
}) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const addItem = useCallback((): void => {
    if (localQuantity < max) {
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity);
      whenQuantityChange(newQuantity);
    }
  }, [localQuantity, max, whenQuantityChange]);

  const removeItem = useCallback((): void => {
    if (localQuantity > min) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      whenQuantityChange(newQuantity);
    }
  }, [localQuantity, min, whenQuantityChange]);

  return (
    <div className="ml-[33.3%] mb-8 mt-4 flex max-sm:flex-col max-sm:ml-[42%]">
      <button
        className={`w-7 border py-1 px-2 max-xl:text-xxs ${
          localQuantity === min
            ? 'bg-gray-300 text-white cursor-not-allowed'
            : ''
        }`}
        onClick={removeItem}
        disabled={localQuantity === min}
      >
        -
      </button>
      <p className="py-1 px-1 py-2 mx-1 max-xl:text-xxs">{quantity}</p>
      <button
        className={`w-7 border py-1 px-2 max-xl:text-xxs ${
          localQuantity === max
            ? 'bg-gray-300 text-white cursor-not-allowed'
            : ''
        }`}
        onClick={addItem}
        disabled={localQuantity === max}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySpinner;
