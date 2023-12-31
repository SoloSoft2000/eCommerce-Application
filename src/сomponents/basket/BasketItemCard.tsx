import React, { useContext, useCallback } from 'react';
import QuantitySpinner from './QuantitySpinner';
import { BasketItemProps } from '../../helpers/interfaces/basket/basket-item-props';
import updateQuantity from '../../utils/sdk/basket/updateQuantity';
import NotificationContext from '../../utils/notification/NotificationContext';
import {
  getDiscountedPrice,
  getPrice,
} from '../../helpers/functions/calculate-basket-prices';

function BasketItemCard({
  lineItem,
  removeFromCart,
  updateCartTotal,
}: BasketItemProps): React.JSX.Element {
  const displayName = lineItem.name['en-US'];
  const showNotification = useContext(NotificationContext);

  const getQuantityChange = useCallback(
    async (newQuantity: number): Promise<void> => {
      try {
        await updateQuantity(
          'changeLineItemQuantity',
          lineItem.id,
          newQuantity
        );
        updateCartTotal();
      } catch (error) {
        showNotification('Error updating quantity', 'error');
      }
    },
    [lineItem.id, updateQuantity, updateCartTotal, showNotification]
  );

  const promoPrice: number | undefined = getDiscountedPrice(lineItem);
  const totalPromoPrice: string =
    promoPrice !== undefined ? promoPrice.toFixed(2) : '';

  const subtotal: string = totalPromoPrice
    ? (+totalPromoPrice * lineItem.quantity).toFixed(2)
    : (getPrice(lineItem) * lineItem.quantity).toFixed(2);

  return (
    <div className="m-1 max-md:mt-8 border-b py-3 flex justify-betweeen">
      <div className="h-[130px] w-[130px] max-sm:w-16 max-sm:h-16">
        <img src={lineItem.variant.images?.[0]?.url ?? ''} alt={displayName} />
      </div>
      <div className="w-1/2 max-md:mt-2 max-md:mx-auto ml-5 px-2">
        <h3 className="max-lg:text-sm font-bold mb-2 max-md:mb-2 pt-1 max-sm:pt-0">
          {displayName}
        </h3>
        <div className="flex mb-1 max-md:mb-2 max-md:flex-col">
          <span
            className={
              getDiscountedPrice(lineItem) !== undefined ? 'line-through' : ''
            }
          >
            $ {getPrice(lineItem).toFixed(2)}
          </span>
        </div>
        <div className="flex mb-4 max-md:mb-2">
          <span
            className={
              getDiscountedPrice(lineItem) === undefined
                ? 'invisible'
                : 'text-red-600'
            }
          >
            $ {totalPromoPrice}
          </span>
        </div>
        <div className="flex">
          <p className="text-xs font-bold mr-3">Subtotal:</p>
          <span className="text-xs font-bold">$ {subtotal}</span>
        </div>
      </div>
      <div className="w-1/4">
        <div className="pr-2">
          <QuantitySpinner
            min={1}
            max={99}
            quantity={lineItem.quantity}
            whenQuantityChange={getQuantityChange}
          />
        </div>
        <div>
          <div className="ml-[10%]">
            <button
              onClick={(): void => removeFromCart(lineItem.id)}
              className="w-full text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer max-lg:mr-3"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItemCard;
