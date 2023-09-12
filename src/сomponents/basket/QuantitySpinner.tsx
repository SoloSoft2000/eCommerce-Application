import React, { useState, useCallback } from 'react';
import { QuantitySpinnerProps } from '../../helpers/interfaces/basket/quantity-spinner-props';

const QuantitySpinner: React.FC<QuantitySpinnerProps> = ({ min, max }) => {
  const [quantity, setQuantity] = useState(min);

  const addItem = useCallback(() => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  }, [quantity, max]);

  const removeItem = useCallback(() => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  }, [quantity, min]);

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
