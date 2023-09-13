import React, { useContext, useCallback } from 'react';
import QuantitySpinner from './QuantitySpinner';
import { BasketItemProps } from '../../helpers/interfaces/basket/basket-item-props';
import updateQuantity from '../../utils/sdk/basket/updateQuantity';
import NotificationContext from '../../utils/notification/NotificationContext';

function BasketItemCard({
  name,
  imageUrl,
  price,
  quantity,
  removeFromCart,
  lineItemId,
  updateCartTotal,
}: BasketItemProps): React.JSX.Element {
  const displayName = name['en-US'];
  const showNotification = useContext(NotificationContext);

  const getRemoveFromCart = useCallback((): void => {
    removeFromCart();
  }, []);

  const getQuantityChange = useCallback(
    async (newQuantity: number): Promise<void> => {
      try {
        await updateQuantity('changeLineItemQuantity', lineItemId, newQuantity);
        updateCartTotal();
      } catch (error) {
        showNotification('Error updating quantity', 'error');
      }
    },
    [lineItemId, updateQuantity, updateCartTotal, showNotification]
  );

  return (
    <div className="m-1 max-md:mt-8 border-b py-3 flex justify-betweeen">
      <div className="h-[130px] w-[130px] border">
        <img src={imageUrl} alt={displayName} />
      </div>
      <div className="w-1/2 max-md:mt-5 max-md:mx-auto ml-5 px-2">
        <h3 className="max-lg:text-sm font-bold mb-2 max-md:mb-2 pt-3">
          {displayName}
        </h3>
        <div className="flex mb-2 max-md:mb-2 max-md:flex-col"></div>
        {/* Don't forget about promo discount (use logic from Detailed Product Card) and currency formatter function */}
        <div className="flex mb-2 max-md:mb-2">$ {price.toFixed(2)}</div>
      </div>
      <div className="w-1/4">
        <div>
          <QuantitySpinner
            min={1}
            max={10}
            quantity={quantity}
            whenQuantityChange={getQuantityChange}
          />
        </div>
        <div>
          <div className="ml-[10%]">
            <button
              onClick={getRemoveFromCart}
              className="w-full text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer;"
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
