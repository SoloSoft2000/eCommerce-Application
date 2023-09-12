import React from 'react';
import { ClearCartButtonProps } from '../../helpers/interfaces/basket/clear-basket-button-props';

function ClearCartButton({
  isCartEmpty,
}: ClearCartButtonProps): React.JSX.Element {
  return (
    <button
      className={`w-full block max-md:w-full text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm  ${
        isCartEmpty
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'hover:bg-slate-600 cursor-pointer'
      }`}
      
      disabled={isCartEmpty}
    >
      Clear Shopping Cart
    </button>
  );
}

export default ClearCartButton;
