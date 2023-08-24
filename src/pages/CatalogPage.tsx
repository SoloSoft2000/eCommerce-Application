import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Filter from '../сomponents/catalog/Filter';
import ProductList from '../сomponents/catalog/ProductList';
import getProducts from '../utils/sdk/getProducts';
import setDataElements from '../utils/sdk/utils/handleProductData';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';

function CatalogPage(): React.JSX.Element {
  const { category } = useParams();

  const [filterMenu, setFilterMenu] = useState(true);
  const [catalog, setCatalog] = useState<ProductCardProps[]>([]);

  const productArray = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const products = await getProducts({
          category,
          sort: productArray.sort,
          priceRange: productArray.price,
        });
        const data = setDataElements(products);
        setCatalog(data);
      } catch (err) {
        throw new Error(`Catalog page: ${err}`);
      }
    };
    fetchData();
  }, [dispatch, productArray]);

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
      <ProductList data={catalog} />
    </main>
  );
}

export default CatalogPage;
