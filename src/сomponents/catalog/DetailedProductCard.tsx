import React from 'react';
import { ProductCardProps } from '../../helpers/interfaces/catalog/catalog-props';

function DetailedProductCard(props: ProductCardProps): React.JSX.Element {
  return (
    <div className="flex justify-center mt-28">
      <div className="border-2 w-1/3">
        <img src={props.image} alt={props.description} />
      </div>
      <div className="ml-8 w-1/3">
        <h3 className="text-2xl font-bold mb-11">{props.title}</h3>
        <p className="text-xl mb-11">{props.description}</p>
        <div className="flex mb-11">
          <div
            className={`text-2xl ${
              props.discount ? 'line-through text-amber-600' : 'text-amber-600'
            }`}
          >
            $ {props.price}
          </div>
          {props.discount ? (
            <div className="text-2xl text-red-600 ml-2">$ {props.discount}</div>
          ) : (
            <div className="text-2xl text-red-600 ml-2">&nbsp;</div>
          )}
        </div>
        <button className="w-1/2 mb-11 text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DetailedProductCard;
