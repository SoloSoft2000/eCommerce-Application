import React, { useEffect, useState } from 'react';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';
import getProducts from '../utils/sdk/getProducts';
import setDataElements from '../utils/sdk/utils/handleProductData';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';
import { useDispatch } from 'react-redux';

function CatalogPage(): React.JSX.Element {
  const [productArray, setProductArray] = useState<ProductCardProps[] | null>(
    null
  );

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const products = await getProducts();
        const data = await setDataElements(products);
        setProductArray(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="container mx-auto flex flex-wrap justify-between items-start pt-10">
      <Filter />
      {productArray && <ProductList data={productArray} />}
    </main>
  );
}

export default CatalogPage;
