import React from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import getCart from '../utils/sdk/basket/getCart';
import { BtnAddToCartProps } from '../helpers/interfaces/catalog/catalog-props';

function ButtonRemoveFromCart(props: BtnAddToCartProps): React.JSX.Element {
  const { id } = props;

  const bthRemoveClick = async (): Promise<void> => {
    if (id) {
      try {
        console.log(id);
        const cart: Cart = await getCart();
        console.log(cart);
        const isProductInCart: boolean = cart.lineItems.some(
          (item: LineItem) => item.productId === id
        );

        if (!isProductInCart) {
          console.error('Product is not in the cart.');
          return;
        }

        await updateQuantity('removeLineItem', id);
        console.log(id);
        console.log('button clicked, removed from cart', id);
      } catch (error) {
        console.error('Error removing product from cart', error);
      }
    }
  };

  return (
    <button
      onClick={bthRemoveClick}
      className="max-md:block w-1/4 max-md:w-9/12 max-md:text-xs max-md:mx-auto max-md:mb-3 text-center rounded p-3 ml-3 text-white uppercase drop-shadow-sm bg-black text-white hover:bg-slate-600 hover:text-white cursor-pointer"
    >
      Remove From Cart
    </button>
  );
}

export default ButtonRemoveFromCart;
