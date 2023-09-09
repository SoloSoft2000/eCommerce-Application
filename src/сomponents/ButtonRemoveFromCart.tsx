import React, { useContext } from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import getCart from '../utils/sdk/basket/getCart';
import { BtnAddToCartProps } from '../helpers/interfaces/catalog/catalog-props';
import NotificationContext from '../utils/notification/NotificationContext';

function ButtonRemoveFromCart(props: BtnAddToCartProps): React.JSX.Element {
  const { id, idInCart, setUpdateFlag, resetIdInCart } = props;
  const showNotification = useContext(NotificationContext);

  const bthRemoveClick = async (): Promise<void> => {
    if (!idInCart) return;
  
    try {
      console.log(idInCart);
      const cart: Cart = await getCart();
      console.log(cart);
      const isProductInCart: boolean = cart.lineItems.some(
        (item: LineItem) => item.productId === id
      );
  
      if (!isProductInCart) {
        console.error('Product is not in the cart.');
        return;
      }
  
      await updateQuantity('removeLineItem', idInCart);
      console.log(idInCart);
      console.log('button clicked, removed from cart', idInCart);
      showNotification('Removed from cart', 'success');
      if (resetIdInCart) {
         resetIdInCart();
      }
     
      // props.setIdInCart(undefined);
      setUpdateFlag(true);
    } catch (error) {
      console.error('Error removing product from cart', error);
    }
  };

  const isDisabled = idInCart === undefined;

  return (
    <button
      onClick={bthRemoveClick}
      disabled={isDisabled}
      className="w-1/6 max-md:w-1/3 max-lg:text-xs max-md:mx-auto mb-11 text-center rounded p-3 ml-3 text-white uppercase drop-shadow-sm bg-black text-white hover:bg-slate-600 hover:text-white cursor-pointer"
    >
      Remove From Cart
    </button>
  );
}

export default ButtonRemoveFromCart;
