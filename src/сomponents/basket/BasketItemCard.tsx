import React from 'react';

function BasketItemCard(): React.JSX.Element {

    return (
        <div className="m-1 max-md:mt-8 border rounded mb-8 flex justify-betweeen">
            <div className="h-[130px] w-[130px] border">
                Product Image 
            </div>
            <div className="w-1/2 max-md:mt-5 max-md:mx-auto ml-5 border px-2">
                <h3 className="max-lg:text-sm font-bold mb-2 max-md:mb-2">
                    Title
                </h3>
                <div className="flex mb-2 max-md:mb-2 max-md:flex-col">
                  <div className="flex max-md:flex-col justify-center">
                    <span className="max-lg:text-sm text-slate-500 font-normal pr-1">
                        Brand:
                    </span>
                    <h3 className="max-lg:text-sm font-bold px-1 mr-3 max-md:mr-0 max-md:mb-2 max-md:px-0">
                        Brand
                    </h3>
                </div>
                <div className="flex max-md:flex-col justify-center">
                    <span className="max-lg:text-sm text-slate-500 font-normal pr-1">
                       Style:
                    </span>
                    <p className="max-lg:text-sm font-bold px-1 max-md:px-0">
                       Style
                    </p>
                </div>
            </div>
           {/* Don't forget about promo discount (use logic from Detailed Product Card) and currency formatter function*/}
            <div className="flex mb-2 max-md:mb-2">
                Price
           </div>
        </div>
        <div className='border w-1/4 ml-5'>Quantity Block</div>
    </div>
    );
}
     
export default BasketItemCard;

