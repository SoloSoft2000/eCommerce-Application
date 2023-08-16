import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { RootState } from '../utils/reducers/store';
import { clearCustomer } from '../utils/reducers/customerReducer';
import { NavigationProps } from '../helpers/interfaces/layout/layout-props';

function Navigation({ isOpen }: NavigationProps): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clearCustomer());
  }, [dispatch]);

  return (
    <nav
      className={`flex justify-between gap-4 m-8 max-md:m-0 max-md:z-50 max-md:w-1/3 max-sm:w-2/4 max-md:h-300 max-md:bg-white 
    max-md:border-2 max-md:border-gray-300 max-md:rounded-tl-2xl max-md:rounded-tr-2xl max-md:rounded-bl-2xl max-md:rounded-br-2xl 
    max-md:fixed max-md:top-0 max-md:-left-1/3 max-sm:-left-2/4 max-md:flex max-md:flex-col max-md:transition-transform 
    max-md:duration-400 max-md:ease-linear ${isOpen ? 'active' : ''}`}
    >
      <Link className="hover:text-neutral-500 max-lg:text-sm max-md:p-3" to="/">
        Main
      </Link>
      <>
        <Link
          className="hover:text-neutral-500 max-lg:text-sm max-md:p-3"
          to="/catalog"
        >
          Catalog Product
        </Link>
        <Link
          className="hover:text-neutral-500 max-lg:text-sm max-md:p-3"
          to="/product"
        >
          Detailed Product
        </Link>
        <Link
          className="hover:text-neutral-500 max-lg:text-sm max-md:p-3"
          to="/basket"
        >
          <div className="flex items-center">
            <SlBasket className="mr-1" /> Basket
          </div>
        </Link>
      </>
      <Link
        className="hover:text-neutral-500 max-lg:text-sm max-md:p-3"
        to="/about"
      >
        About Us
      </Link>

      {customer.id && (
        <>
          <Link
            className="hover:text-neutral-500 max-lg:text-sm max-md:p-3"
            to="/profile"
          >
            <div className="flex items-center">
              <AiOutlineUser className="mr-1" /> User Profile
            </div>
          </Link>
          <Link
            className="text-amber-600 hover:text-amber-500 max-lg:text-sm max-md:p-4"
            to="/"
            onClick={handleLogout}
          >
            Log out
          </Link>
        </>
      )}
      {!customer.id && (
        <>
          <Link
            className="text-amber-600 hover:text-amber-500 max-lg:text-sm max-md:p-4"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-amber-600 hover:text-amber-500 max-lg:text-sm max-md:p-4"
            to="/register"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
