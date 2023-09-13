import React from 'react';
import QuantitySpinner from './QuantitySpinner';
import { BasketItemProps } from '../../helpers/interfaces/basket/basket-item-props';

function BasketItemCard({
  name,
  imageUrl,
  price,
  removeFromCart,
}: BasketItemProps): React.JSX.Element {
  const displayName = name['en-US'];

  const getRemoveFromCart = (): void => {
    removeFromCart();
  };

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
      <div className="w-1/4 ml-5">
        <div>
          <QuantitySpinner min={1} max={10} />
        </div>
        <div>
          <div className="ml-[34%]">
            <button
              onClick={getRemoveFromCart}
              className="w-1/2 max-md:w-1/2 text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer;"
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
