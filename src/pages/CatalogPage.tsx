import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';

function CatalogPage(): React.JSX.Element {
  const productArray = useSelector((state: RootState) => state.products);
  console.log(productArray.data);

  return (
    <main className="container mx-auto flex flex-wrap justify-between items-start pt-10">
      <Filter />
      {productArray && <ProductList data={productArray.data} />}
    </main>
  );
}

export default CatalogPage;
