import React, { useState, useEffect } from 'react';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import getCart from '../utils/sdk/basket/getCart';
import { BtnAddToCartProps } from '../helpers/interfaces/catalog/catalog-props';
import { Cart, LineItem } from '@commercetools/platform-sdk';

function ButtonAddToCart(props: BtnAddToCartProps): React.JSX.Element {
  const { id, btnCatalogClasses } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const checkCart = async (): Promise<void> => {
      try {
        const cart: Cart = await getCart(); 
        const isProductInCart: boolean = cart.lineItems.some((item: LineItem) => item.productId === id);
        setIsDisabled(isProductInCart);
      } catch (error) {
        console.error('Error checking product in cart', error);
      }
    };

    if (id) {
      checkCart();
    }
  }, [id]);

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
    'max-md:block w-1/4 max-md:w-9/12 max-md:text-xs max-md:mx-auto mb-11 text-center rounded p-3 text-white uppercase drop-shadow-sm';

  const buttonClass = isDisabled
    ? 'bg-gray-400 text-gray-500 cursor-not-allowed'
    : 'bg-black text-white hover:bg-slate-600 hover:text-white cursor-pointer';

    return (
      <button
      onClick={bthClick}
      className={`${btnStyles} ${isDisabled ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : buttonClass}`}
      disabled={isDisabled}
    >
      {isDisabled ? 'Added To Cart' : 'Add to Cart'}
    </button>
    );
}

export default ButtonAddToCart;
