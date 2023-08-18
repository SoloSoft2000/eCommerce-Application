import React from 'react';
import Filter from '../сomponents/catalog/Filter';

function CatalogPage(): React.JSX.Element {
  return (
    <main className="container mx-auto flex flex-wrap justify-between">
      <Filter />
      <div className="flex w-3/4 justify-around items-center flex-wrap gap-8 md:gap-y-14 py-8">
        <div className="w-[18.8rem] h-auto bg-white hover:drop-shadow-lg rounded relative cursor-pointer">
          <div className="absolute flex justify-center items-center w-12 h-12 top-3 right-3 p-2 bg-white rounded-full">
            -20%
          </div>
          <div className="w-[18.8rem] h-[18.8rem] bg-orange-300 rounded">
            <img className="w-full" alt="" />
          </div>
          <div className="p-2 flex flex-col gap-3">
            <h4 className="font-bold text-3xl">Title</h4>
            <p>Description</p>
            <p>
              <span className="mr-2 line-through text-amber-400">$ 10.00</span>
              <span className="text-amber-600 text-3xl">$ 8.00</span>
            </p>
          </div>
        </div>
        <div className="w-[18.8rem] h-[24.5rem] flex flex-col gap-3">
          <div className="w-[18.8rem] h-[18.8rem] bg-orange-300">
            <img className="w-full" alt="" />
          </div>
          <p>Title</p>
          <p className="text-amber-600">
            <span className="mr-2 ">$ 10.00</span> <span>$ 8.00</span>
          </p>
        </div>
        <div className="w-[18.8rem] h-[24.5rem] flex flex-col gap-3">
          <div className="w-[18.8rem] h-[18.8rem] bg-orange-300">
            <img className="w-full" alt="" />
          </div>
          <p>Title</p>
          <p className="text-amber-600">$ 10.00</p>
        </div>
        <div className="w-[18.8rem] h-[24.5rem] flex flex-col gap-3">
          <div className="w-[18.8rem] h-[18.8rem] bg-orange-300">
            <img className="w-full" alt="" />
          </div>
          <p>Title</p>
          <p className="text-amber-600">$ 10.00</p>
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;
