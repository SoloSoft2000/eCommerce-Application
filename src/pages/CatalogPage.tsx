import React from 'react';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';
import fetchData from '../utils/sdk/getProducts';

function CatalogPage(): React.JSX.Element {
  fetchData();
  return (
    <main className="container mx-auto flex flex-wrap justify-between items-start pt-10">
      <Filter />
      <ProductList />
    </main>
  );
}

export default CatalogPage;
