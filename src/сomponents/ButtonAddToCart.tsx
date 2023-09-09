import React, { useContext } from 'react';
import updateQuantity from '../utils/sdk/basket/updateQuantity';
import { BtnAddToCartProps } from '../helpers/interfaces/catalog/catalog-props';
import ButtonStyles from '../assets/styles/buttonToCart.module.scss';
import NotificationContext from '../utils/notification/NotificationContext';

function ButtonAddToCart(props: BtnAddToCartProps): React.JSX.Element {
  const showNotification = useContext(NotificationContext);

  const bthClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    updateQuantity('addLineItem', props.id as string)
      .then(() => {
        showNotification('Added to cart', 'success');
        props.setUpdateFlag((prev) => !prev);
      })
      .catch((err) => {
        showNotification(err, 'error');
      });
  };

  const btnStyles = props.btnCatalogClasses
    ? ButtonStyles.btnAddInCatalog
    : ButtonStyles.btnAddDetailedProduct;
  const buttonClass = props.idInCart
    ? ButtonStyles.btnNotAllowed
    : ButtonStyles.btnAllowed;

  return (
    <button
      onClick={bthClick}
      className={`${btnStyles} ${buttonClass}`}
      disabled={props.idInCart !== undefined}
    >
      {props.idInCart ? 'Added To Cart' : 'Add to Cart'}
    </button>
  );
}

export default ButtonAddToCart;
