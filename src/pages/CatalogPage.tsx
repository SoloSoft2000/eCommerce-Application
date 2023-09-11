import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
import AppliedFilter from '../сomponents/catalog/AppliedFilters';
import NotificationContext from '../utils/notification/NotificationContext';
import ProductCardSkeleton from '../сomponents/catalog/ProductCardSkeleton';

const brand = ['ABC-Style', 'Romantics LTD', 'NY-Fashion'];
const styles = ['Retro', 'Modern', 'Casual', 'Chic'];

function CatalogPage(): React.JSX.Element {
  const { category } = useParams();

  const showNotification = useContext(NotificationContext);

  const [filterMenu, setFilterMenu] = useState(true);
  const [catalog, setCatalog] = useState<ProductCardProps[]>([]);
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  const [productOffset, setProductOffset] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const productArray = useSelector((state: RootState) => state.products);
  const { sortByAbc, sortByPrice } = productArray.sort;

  const [minPrice, maxPrice] = useMemo(
    () => [productArray.price[0], productArray.price[1]],
    [productArray.price]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const products = await getProducts({
          category,
          sort: Object.values(productArray.sort).filter(Boolean),
          priceRange: productArray.price,
          text: productArray.text,
          brand: productArray.brand,
          style: productArray.style,
          offsetElements: productOffset,
        });
        const { results, total } = products;
        if (total) setTotalProducts(total);
        const data = setDataElements(results);
        setCatalog((prevData) => [...prevData, ...data]);
      } catch (err) {
        showNotification(`Catalog page: ${err}`, 'error');
      }
    };
    fetchData();
  }, [dispatch, productArray, category, productOffset]);

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

  useEffect(() => {
    setCategoriesMenu(false);
    setProductOffset(0);
    setCatalog([]);
  }, [category]);

  const appliedFilterGenerator = useCallback(
    (name: string, sortMethod: string) => (
      <AppliedFilter key={name} name={name} sortMethod={sortMethod} />
    ),
    [productArray]
  );

  const generateAppliedFilters = useCallback(
    (array: string[], values: string[], name: string) =>
      values.map((el) => {
        if (array.includes(el)) {
          return appliedFilterGenerator(
            `${name}: ${el}`,
            `sortBy${name}:${el}`
          );
        }
        return null;
      }),
    [productArray]
  );

  return (
    <main className="container mx-auto pt-2 pb-10">
      <BreadcrumbCatalog />
      <div className="flex flex-wrap sm:flex-nowrap gap-8 justify-center sm:justify-between items-center relative z-10 mb-[2rem]">
        <div className="w-full sm:w-96 relative">
          <button
            className="w-full px-4 h-[3rem] bg-orange-300 hover:bg-orange-200 rounded w-full cursor-pointer relative text-xl"
            onClick={(): void => setCategoriesMenu((prev) => !prev)}
          >
            Categories
            <span className="fon-bold text-2xl absolute right-2 top-1">+</span>
          </button>
        </div>
        {categoriesMenu && (
          <div className="absolute left-0 top-[3rem] w-full border-2 drop-shadow-md bg-white">
            <MainCatalogPage />
          </div>
        )}
        <div className="grow flex justify-start items-center flex-wrap gap-4">
          <p className="text-slate-600">Total products: {totalProducts} </p>
          {sortByPrice === 'price asc' &&
            appliedFilterGenerator('Price: Low to High', 'sortByPrice')}
          {sortByPrice === 'price desc' &&
            appliedFilterGenerator('Price: High to Low', 'sortByPrice')}
          {sortByAbc === 'name.en-Us asc' &&
            appliedFilterGenerator('Name: A-Z', 'sortByAbc')}
          {sortByAbc === 'name.en-Us desc' &&
            appliedFilterGenerator('Name: Z-A', 'sortByAbc')}

          {(minPrice > 0 || maxPrice > 0) &&
            appliedFilterGenerator(
              `Price from ${minPrice || 0} to ${maxPrice || '*'}`,
              'sortByPriceRange'
            )}
          {productArray.text &&
            appliedFilterGenerator(
              `Search: ${productArray.text}`,
              'sortByText'
            )}
          {productArray.brand &&
            generateAppliedFilters(brand, productArray.brand, 'Brand')}

          {productArray.style &&
            generateAppliedFilters(styles, productArray.style, 'Style')}
        </div>
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
          <InfiniteScroll
            dataLength={catalog.length}
            next={(): void => {
              setProductOffset((prev) => prev + 2);
            }}
            hasMore={catalog.length < totalProducts}
            loader={
              <div className="flex w-full sm:max-w-[50rem] justify-around items-center flex-wrap gap-8 md:gap-y-14 mt-10">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </div>
            }
            endMessage={
              <p className="flex justify-center p-5 text-slate-600">
                You have seen all products in this category
              </p>
            }
          >
            <ProductList data={catalog} />
          </InfiniteScroll>
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;
