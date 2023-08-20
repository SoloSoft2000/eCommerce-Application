import React from 'react';
import ProductCard from './ProductCard';
import {
  ProductListProps,
  ProductCardProps,
} from '../../helpers/interfaces/catalog/catalog-props';

function ProductList({ data }: ProductListProps): React.JSX.Element {
  return (
    <div className="flex w-3/4 justify-around items-center flex-wrap gap-8 md:gap-y-14">
      {data &&
        data.map(
          (item: ProductCardProps, index: number): React.JSX.Element => (
            <ProductCard
              description={item.description}
              title={item.title}
              image={item.image}
              key={index}
              price={item.price}
              sale={null}
            />
          )
        )}
    </div>
  );
}

export default ProductList;
