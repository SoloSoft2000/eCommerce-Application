import React from 'react';

function DetailedProductCard(): React.JSX.Element {
  return (
   <div className='flex justify-center mt-16'>
    <div className='border-2 w-1/3'>Picture will be here</div>
    <div className='ml-8 w-1/3 border-2'>
        <h3 className='text-2xl font-bold mb-11'>Product name</h3>
        <p className='text-xl mb-11'>Product description</p>
        <div className='flex mb-11'>
            <div className='text-amber-600 text-2xl'>Reg Price</div>
            <div className='text-2xl text-red-600 ml-2'>Sale price</div>
        </div>
        <button className='w-1/2 mb-11 text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer'>Add to Cart</button>
    </div> 
    </div>
  );
}

export default DetailedProductCard;




