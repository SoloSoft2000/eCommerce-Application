import React, { useState } from 'react';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import { BtnAddToCartProps } from '../helpers/interfaces/catalog/catalog-props';

function ButtonAddToCart(props: BtnAddToCartProps): React.JSX.Element {
  const { id, btnCatalogClasses } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  const bthClick = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    if (!isDisabled && id) {
      try {
        setIsDisabled(true);
        await updateQuantity('addLineItem', id);
        console.log('button clicked, added to cart', id);
      } catch (error) {
        console.error('Error adding product to cart', error);
        setIsDisabled(false);
      }
    }
  };

  const btnStyles: string =
    btnCatalogClasses ||
    'max-md:block w-1/2 max-md:w-9/12 max-md:text-xs max-md:mx-auto mb-11 text-center rounded p-3 text-white uppercase drop-shadow-sm';

  const buttonClass = isDisabled
    ? 'bg-gray-400 text-gray-500 cursor-not-allowed'
    : 'bg-black text-white hover:bg-slate-600 hover:text-white cursor-pointer';

  return (
    <button onClick={bthClick} className={`${btnStyles} ${buttonClass}`} disabled={isDisabled}>
      {isDisabled ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
}

export default ButtonAddToCart;
