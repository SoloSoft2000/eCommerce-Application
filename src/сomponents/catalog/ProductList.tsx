import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Cart } from '@commercetools/platform-sdk';
import ProductCard from './ProductCard';
import {
  ProductListProps,
  ProductCardProps,
} from '../../helpers/interfaces/catalog/catalog-props';
import ProductCardSkeleton from './ProductCardSkeleton';
import getCart from '../../utils/sdk/basket/getCart';

function ProductList({ data }: ProductListProps): React.JSX.Element {
  const { pathname: currentPath } = useLocation();
  const [cartItems, setCartItems] = useState<Cart | null>(null);
  const [updateCart, setUpdateCart] = useState(false);

  useEffect(() => {
    getCart()
      .then((cart) => setCartItems(cart))
      .catch(() => setCartItems(null))
      .finally(() => setUpdateCart(false));
  }, [updateCart]);

  const idProductInCart = useCallback(
    (productId: string): string | undefined => {
      const lineItem = cartItems?.lineItems.find(
        (item) => item.productId === productId
      );
      if (lineItem) {
        return lineItem.id;
      }
      return undefined;
    },
    [cartItems]
  );

  return (
    <div className="flex w-full sm:max-w-[50rem] justify-around items-center flex-wrap gap-8 md:gap-y-14">
      {data && data?.length > 0 ? (
        data.map(
          (item: ProductCardProps, index: number): React.JSX.Element => (
            <Link to={`${currentPath}/product/${item.id}`} key={index}>
              <ProductCard
                id={item.id}
                description={item.description}
                title={item.title}
                image={item.image}
                key={index}
                price={item.price}
                discount={item.discount}
                salePercent={item.salePercent}
                productBrand={item.productBrand}
                productStyle={item.productStyle}
                idInCart={idProductInCart(item.id as string)}
                setUpdateCart={setUpdateCart}
              />
            </Link>
          )
        )
      ) : (
        <>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </>
      )}
    </div>
  );
}

export default ProductList;
