import React from 'react';

function ProductCard(): React.JSX.Element {
  return (
    <div className="w-[18.8rem] h-auto bg-white hover:drop-shadow-lg rounded relative cursor-pointer">
      <div className="absolute flex justify-center items-center w-12 h-12 top-3 right-3 p-2 bg-white rounded-full">
        -20%
      </div>
      <div className="w-[18.8rem] h-[18.8rem] bg-orange-300 rounded">
        <img className="w-full" alt="" />
      </div>
      <div className="p-2 flex flex-col gap-3">
        <h4 className="font-bold text-xl">Title</h4>
        <p>Description</p>
        <p>
          <span className="mr-2 line-through text-amber-400">$ 10.00</span>
          <span className="text-amber-600 text-xl">$ 8.00</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
