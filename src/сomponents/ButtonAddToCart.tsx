import React from 'react';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import { BtnAddToCartProps } from '../helpers/interfaces/catalog/catalog-props';

function ButtonAddToCart(props: BtnAddToCartProps): React.JSX.Element {
  const { id, btnCatalogClasses} = props;

  const bthClick = (): void => {
    if (id) {
      updateQuantity('addLineItem', id);
    }
  };

  const btnStyles: string = btnCatalogClasses
  ? btnCatalogClasses
  : 'max-md:block w-1/2 max-md:w-9/12 max-md:text-xs max-md:mx-auto mb-11 text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer';

  return (
    <button
      onClick={bthClick}
      className={btnStyles}
    >
      Add to Cart
    </button>
  );
}

export default ButtonAddToCart;
