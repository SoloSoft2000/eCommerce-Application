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
      className={`flex max-md:flex-col max-md:fixed max-md:justify-start max-md:items-center md:justify-between max-md:gap-6 max-md:pt-6 md:gap-4 md:m-8 max-md:m-0 max-md:z-50 max-md:w-3/4 max-md:drop-shadow-md	max-md:h-full max-md:bg-white 
      max-md:top-0 max-md:-left-3/4 max-md:transition-transform 
      max-md:duration-400 max-md:ease-linear ${isOpen ? 'translate-x-full' : ''}`}
    >
      <Link
        className="hover:text-neutral-500 max-lg:text-sm lg:text-2xl"
        to="/"
      >
        Main
      </Link>
      <>
        <Link
          className="hover:text-neutral-500 max-lg:text-sm lg:text-2xl"
          to="/catalog"
        >
          Catalog Product
        </Link>
        <Link
          className="hover:text-neutral-500 max-lg:text-sm lg:text-2xl"
          to="/product"
        >
          Detailed Product
        </Link>
        <Link
          className="hover:text-neutral-500 max-lg:text-sm lg:text-2xl"
          to="/basket"
        >
          <div className="flex items-center">
            <SlBasket className="mr-1" /> Basket
          </div>
        </Link>
      </>
      <Link
        className="hover:text-neutral-500 max-lg:text-sm lg:text-2xl"
        to="/about"
      >
        About Us
      </Link>

      {customer.id && (
        <>
          <Link
            className="hover:text-neutral-500 max-lg:text-sm lg:text-2xl"
            to="/profile"
          >
            <div className="flex items-center">
              <AiOutlineUser className="mr-1" /> User Profile
            </div>
          </Link>
          <Link
            className="text-amber-600 hover:text-amber-500 max-lg:text-sm lg:text-2xl"
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
            className="text-amber-600 hover:text-amber-500 max-lg:text-sm lg:text-2xl"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-amber-600 hover:text-amber-500 max-lg:text-sm lg:text-2xl"
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
