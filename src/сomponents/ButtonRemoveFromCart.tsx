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
      const cart: Cart = await getCart();
      const isProductInCart: boolean = cart.lineItems.some(
        (item: LineItem) => item.productId === id
      );

      if (!isProductInCart) {
        showNotification('The product is not in the cart', 'error');
      }

      await updateQuantity('changeLineItemQuantity', idInCart, 0);
      showNotification('Removed from cart', 'success');
      if (resetIdInCart) {
        resetIdInCart();
      }
      setUpdateFlag(true);
    } catch (error) {
      showNotification('Error removing product from cart', 'error');
    }
  };

  const isDisabled = idInCart === undefined;
  const btnClasses = `w-1/6 max-md:w-1/3 max-lg:text-xs max-md:mx-auto mb-11 text-center rounded p-3 ml-3 text-white uppercase drop-shadow-sm ${
    isDisabled
      ? 'bg-gray-200 text-white cursor-not-allowed'
      : 'bg-black hover:bg-slate-600 hover:text-white cursor-pointer'
  }`;

  return (
    <button
      onClick={bthRemoveClick}
      disabled={isDisabled}
      className={btnClasses}
    >
      Remove From Cart
    </button>
  );
}

export default ButtonRemoveFromCart;
