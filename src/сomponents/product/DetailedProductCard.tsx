import React from 'react';
import { ProductCardProps } from '../../helpers/interfaces/catalog/catalog-props';
import SwiperComponent from './SwiperSlider';

function DetailedProductCard(props: ProductCardProps): React.JSX.Element {
  const images = props.images || [];

  const price = typeof props.price === 'number' ? props.price : parseFloat(props.price);
  const discount = typeof props.discount === 'number' ? props.discount : parseFloat(props.discount || '');
  
  const currencyPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // currencyDisplay: 'narrowSymbol',
  }).format(price);

  const currencyDiscount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // currencyDisplay: 'narrowSymbol',
  }).format(discount);

  return (
    <div className="flex mt-28 justify-center h-full">
      {images.length > 0 && <SwiperComponent images={images} />}
      <div className="ml-8 w-1/2">
        <h3 className="text-2xl font-bold mb-8">{props.title}</h3>
        <p className="text-xl mb-8">{props.description}</p>
        <div className='flex mb-8'>
          <div className='flex justify-center'>
            <span className='text-slate-500	font-normal	pr-1'>Brand:</span>
            <h3 className="font-bold px-1 mr-3">{props.productBrand}</h3>
          </div>
          <div className='flex justify-center'>
            <span className='text-slate-500	font-normal	pr-1'>Style:</span>
            <p className="font-bold px-1">{props.productStyle}</p>
          </div >
        </div>
        <div className="flex mb-11">
          <div
            className={`text-2xl ${
              props.discount ? 'line-through text-amber-600' : 'text-amber-600'
            }`}
          >
           {currencyPrice}
          </div>
          {props.discount ? (
            <div className="text-2xl text-red-600 ml-2">{currencyDiscount}</div>
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
