import React from 'react';
import Filter from '../сomponents/catalog/Filter';
import ProductCard from '../сomponents/catalog/ProductCard';
import getProducts from '../utils/sdk/getProducts';

function CatalogPage(): React.JSX.Element {
  // getProducts();
  return (
    <main className="container mx-auto flex flex-wrap justify-between items-start pt-10">
      <Filter />
      <div className="flex w-3/4 justify-around items-center flex-wrap gap-8 md:gap-y-14">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
}

export default CatalogPage;
