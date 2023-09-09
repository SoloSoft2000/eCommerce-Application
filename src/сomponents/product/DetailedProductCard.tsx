import React from 'react';
import { ProductCardProps } from '../../helpers/interfaces/catalog/catalog-props';
import SwiperComponent from './SwiperSlider';
import CurrencyFormatter from '../../helpers/functions/currency-formatter';

function DetailedProductCard(props: ProductCardProps): React.JSX.Element {
  const images: string[] = props.images || [];

  const price: number =
    typeof props.price === 'number' ? props.price : parseFloat(props.price);
  const discount: number =
    typeof props.discount === 'number'
      ? props.discount
      : parseFloat(props.discount || '');

  return (
    <div className="max-md:flex-col max-md:mt-8 flex mt-28 justify-center h-full">
      {images.length > 0 && <SwiperComponent images={images} />}
      <div className="w-1/2 max-md:mt-5 max-md:mx-auto">
        <h3 className="max-lg:text-sm text-2xl font-bold mb-8 max-md:mb-5">
          {props.title}
        </h3>
        <p className="max-lg:text-sm text-xl mb-8 max-md:mb-5">
          {props.description}
        </p>
        <div className="flex mb-8 max-md:mb-5 max-md:flex-col">
          <div className="flex max-md:flex-col justify-center">
            <span className="max-lg:text-sm text-slate-500 font-normal pr-1">
              Brand:
            </span>
            <h3 className="max-lg:text-sm font-bold px-1 mr-3 max-md:mr-0 max-md:mb-2 max-md:px-0">
              {props.productBrand}
            </h3>
          </div>
          <div className="flex max-md:flex-col justify-center">
            <span className="max-lg:text-sm text-slate-500 font-normal pr-1">
              Style:
            </span>
            <p className="max-lg:text-sm font-bold px-1 max-md:px-0">
              {props.productStyle}
            </p>
          </div>
        </div>
        <div className="flex mb-11 max-md:mb-5">
          <div
            className={`max-lg:text-sm text-2xl ${
              props.discount ? 'line-through text-amber-600' : 'text-amber-600'
            }`}
          >
            <CurrencyFormatter value={price} />
          </div>
          {props.discount ? (
            <div className="max-lg:text-sm text-2xl text-red-600 ml-2">
              <CurrencyFormatter value={discount} />
            </div>
          ) : (
            <div className="max-lg:text-sm text-2xl text-red-600 ml-2">
              &nbsp;
            </div>
          )}
        </div>
        {/* <ButtonAddToCart setUpdateFlag={setUpdateFlag} id={props.id} idInCart={props.idInCart} />
        <ButtonRemoveFromCart setUpdateFlag={setUpdateFlag} id={props.id} idInCart={props.idInCart} /> */}
      </div>
    </div>
  );
}

export default DetailedProductCard;
