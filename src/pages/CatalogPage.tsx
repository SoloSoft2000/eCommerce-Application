import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';

function CatalogPage(): React.JSX.Element {
  const productArray = useSelector((state: RootState) => state.products);
  console.log(productArray.data);

  return (
    <main className="container mx-auto flex flex-wrap sm:flex-nowrap gap-4 justify-between items-start py-10">
      <Filter />
      {productArray && <ProductList data={productArray.data} />}
    </main>
  );
}

export default CatalogPage;
