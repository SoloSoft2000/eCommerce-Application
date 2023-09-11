import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProductCardSkeleton(): React.JSX.Element {
  return (
    <div className="border-[1px] border-zinc-200 w-[18rem] h-[30rem] h-auto bg-white hover:drop-shadow-lg rounded relative cursor-pointer overflow-hidden">
      <div className="w-full">
        <Skeleton height={288} />
      </div>

      <div className="h-[12rem] px-2 pt-2 pb-4 flex flex-col gap-2 justify-between">
        <div>
          <p className="flex gap-10">
            <Skeleton width={100} />
            <Skeleton width={100} />
          </p>
          <h4 className="font-bold mb-2">
            <Skeleton count={4} />
          </h4>
        </div>
        <p className="flex justify-between items-center">
          <Skeleton width={100} />
          <Skeleton width={100} height={30} />
        </p>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
