import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';
import getProducts from '../utils/sdk/getProducts';
import setDataElements from '../utils/sdk/utils/handleProductData';
import { setProductsArray } from '../utils/reducers/productsListReducer';

function CatalogPage(): React.JSX.Element {
  const productArray = useSelector((state: RootState) => state.products.data);
  const categorySelected = useSelector(
    (state: RootState) => state.products.category
  );
  const dispatch = useDispatch();
  const [filterMenu, setFilterMenu] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const products = await getProducts({ category: categorySelected });
      const data = setDataElements(products);
      dispatch(setProductsArray(data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!productArray) fetchData();
  }, [fetchData, productArray]);

  useEffect(() => {
    if (categorySelected) fetchData();
  }, [fetchData, categorySelected]);

  useEffect(() => {
    const followResizing = (): void => {
      if (window.innerWidth >= 640) {
        setFilterMenu(true);
      }
    };

    window.addEventListener('resize', followResizing);

    return () => {
      window.removeEventListener('resize', followResizing);
    };
  }, []);

  const toggleFilterMenu = useCallback(() => {
    setFilterMenu(!filterMenu);
  }, [filterMenu]);

  return (
    <main className="container mx-auto flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-around items-start py-10">
      <div className="flex w-full sm:w-96 flex-col justify-center">
        <button
          className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded sm:hidden text-xl w-full mb-3"
          onClick={toggleFilterMenu}
        >
          {filterMenu ? 'Hide filters' : 'Show filters'}
        </button>
        {filterMenu && <Filter />}
      </div>
      {productArray && <ProductList data={productArray} />}
    </main>
  );
}

export default CatalogPage;
