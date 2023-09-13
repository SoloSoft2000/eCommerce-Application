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
    <div className="ml-[25%] mb-8 mt-4">
      <button className="w-7 border py-1 px-2" onClick={removeItem}>
        -
      </button>
      <span className="py-1 px-2 py-1 mx-1">{quantity}</span>
      <button className="w-7 border py-1 px-2" onClick={addItem}>
        +
      </button>
    </div>
  );
};

export default QuantitySpinner;
