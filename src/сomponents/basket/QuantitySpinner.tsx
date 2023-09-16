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
    <div className="ml-[30.5%] mb-8 mt-4 flex max-sm:flex-col max-sm:ml-[42%]">
      <button
        className="w-7 border py-1 px-2 max-xl:text-xxs"
        onClick={removeItem}
      >
        -
      </button>
      <p className="py-1 px-2 py-2 mx-1 max-xl:text-xs">{quantity}</p>
      <button
        className="w-7 border py-1 px-2 max-xl:text-xxs"
        onClick={addItem}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySpinner;
