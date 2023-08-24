import React from 'react';
import ProductCard from './ProductCard';
import {
  ProductListProps,
  ProductCardProps,
} from '../../helpers/interfaces/catalog/catalog-props';

function ProductList({ data }: ProductListProps): React.JSX.Element {
  return (
    <div className="flex w-full sm:max-w-[50rem] justify-around items-center flex-wrap gap-8 md:gap-y-14">
      {data &&
        data.map(
          (item: ProductCardProps, index: number): React.JSX.Element => (
            <ProductCard
              description={item.description}
              title={item.title}
              image={item.image}
              key={index}
              price={item.price}
              discount={item.discount}
              salePercent={item.salePercent}
            />
          )
        )}
    </div>
  );
}

export default ProductList;
