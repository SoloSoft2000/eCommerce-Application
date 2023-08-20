import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';
import getProducts from '../utils/sdk/getProducts';
import setDataElements from '../utils/sdk/utils/handleProductData';
import { setProductsArray } from '../utils/reducers/productsListReducer';

function CatalogPage(): React.JSX.Element {
  const productArray = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const products = await getProducts();
      const data = await setDataElements(products);
      dispatch(setProductsArray(data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    if (productArray.data.length < 1) {
      fetchData();
    }
  }, [productArray, fetchData]);

  return (
    <main className="container mx-auto flex flex-wrap sm:flex-nowrap gap-4 justify-between items-start py-10">
      <Filter />
      {productArray && <ProductList data={productArray.data} />}
    </main>
  );
}

export default CatalogPage;
