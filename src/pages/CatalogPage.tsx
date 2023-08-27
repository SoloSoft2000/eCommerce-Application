import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';
import getProducts from '../utils/sdk/getProducts';
import setDataElements from '../utils/sdk/utils/handleProductData';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';
import BreadcrumbCatalog from '../сomponents/catalog/Breadcrumb';
import MainCatalogPage from './MainCatalogPage';

function CatalogPage(): React.JSX.Element {
  const { category } = useParams();

  const [filterMenu, setFilterMenu] = useState(true);
  const [catalog, setCatalog] = useState<ProductCardProps[]>([]);
  const [categoriesMenu, setCategoriesMenu] = useState(false);

  const productArray = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const products = await getProducts({
          category,
          sort: productArray.sort,
          priceRange: productArray.price,
          text: productArray.text,
        });
        const data = setDataElements(products);
        setCatalog(data);
      } catch (err) {
        throw new Error(`Catalog page: ${err}`);
      }
    };
    fetchData();
  }, [dispatch, productArray, category]);

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
    <main className="container mx-auto pt-2 pb-10">
      <BreadcrumbCatalog />
      <div className="w-full sm:w-96 relative mb-[2rem]">
        <button
          className="w-full px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded w-full cursor-pointer relative text-xl"
          onClick={(): void => setCategoriesMenu((prev) => !prev)}
        >
          Categories
          <span className="fon-bold text-2xl absolute right-2 top-1">+</span>
        </button>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-between items-start relative">
        <div className="flex w-full sm:w-96 flex-col justify-center">
          <button
            className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded sm:hidden text-xl w-full mb-3"
            onClick={toggleFilterMenu}
          >
            {filterMenu ? 'Hide filters' : 'Show filters'}
          </button>
          {filterMenu && <Filter />}
        </div>
        <div className="grow flex justify-center">
          <ProductList data={catalog} />
        </div>
        {categoriesMenu && (
          <div className="absolute left-0 top-[-2rem] w-full border-2 drop-shadow-md bg-white">
            <MainCatalogPage />
          </div>
        )}
      </div>
    </main>
  );
}

export default CatalogPage;
