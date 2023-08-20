import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { RootState } from '../utils/reducers/store';
import { clearCustomer } from '../utils/reducers/customerReducer';
import { NavigationProps } from '../helpers/interfaces/layout/layout-props';
import NavClasses from '../helpers/enum/components/navClasses';
import { setProductsArray } from '../utils/reducers/productsListReducer';
import setDataElements from '../utils/sdk/utils/handleProductData';
import getProducts from '../utils/sdk/getProducts';

function Navigation({ isOpen }: NavigationProps): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);

  const dispatch = useDispatch();

  const handleCatalog = useCallback(() => {
    async function fetchData(): Promise<void> {
      try {
        const products = await getProducts();
        const data = await setDataElements(products);
        dispatch(setProductsArray(data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(clearCustomer());
  }, [dispatch]);

  const mainClasses = isOpen
    ? `${NavClasses.MAIN} translate-x-full`
    : NavClasses.MAIN;

  return (
    <nav className={mainClasses}>
      <Link className={NavClasses.LINK} to="/">
        Main
      </Link>
      <>
        <Link className={NavClasses.LINK} to="/catalog" onClick={handleCatalog}>
          Catalog Product
        </Link>
        <Link className={NavClasses.LINK} to="/product">
          Detailed Product
        </Link>
        <Link className={NavClasses.LINK} to="/basket">
          <div className={NavClasses.ICONS}>
            <SlBasket className="mr-1" /> Basket
          </div>
        </Link>
      </>
      <Link className={NavClasses.LINK} to="/about">
        About Us
      </Link>

      {customer.id && (
        <>
          <Link className={NavClasses.LINK} to="/profile">
            <div className={NavClasses.ICONS}>
              <AiOutlineUser className="mr-1" /> User Profile
            </div>
          </Link>
          <Link className={NavClasses.USER_LINK} to="/" onClick={handleLogout}>
            Log out
          </Link>
        </>
      )}
      {!customer.id && (
        <>
          <Link className={NavClasses.USER_LINK} to="/login">
            Login
          </Link>
          <Link className={NavClasses.USER_LINK} to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
