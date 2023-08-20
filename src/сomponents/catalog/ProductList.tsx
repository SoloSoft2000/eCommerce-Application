import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import ProductCard from './ProductCard';

type ProductCardProps = {
  description: string;
  title: string;
  image: string;
  price: string | number;
  sale?: string | null;
};

function ProductList(): React.JSX.Element {
  const products = useSelector((state: RootState) => state.products);
  console.log(products);
  return (
    <div className="flex w-3/4 justify-around items-center flex-wrap gap-8 md:gap-y-14">
      {products.data.map(
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
