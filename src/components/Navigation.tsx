import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { RootState } from '../reducers/store';
import { clearCustomer } from '../reducers/customerReducer';

function Navigation(): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clearCustomer());
  }, [dispatch]);

  return (
    <nav className="flex justify-between gap-4 m-8">
      <Link className="hover:text-neutral-500" to="/">
        Main
      </Link>
      <>
        <Link className="hover:text-neutral-500" to="/catalog">
          Catalog Product
        </Link>
        <Link className="hover:text-neutral-500" to="/product">
          Detailed Product
        </Link>
        <Link className="hover:text-neutral-500" to="/basket">
          <div className="flex items-center">
            <SlBasket className="mr-1" /> Basket
          </div>
        </Link>
      </>
      <Link className="hover:text-neutral-500" to="/about">
        About Us
      </Link>

      {customer.id && (
        <>
          <Link className="hover:text-neutral-500" to="/profile">
            <div className="flex items-center">
              <AiOutlineUser className="mr-1" /> User Profile
            </div>
          </Link>
          <Link
            className="text-amber-600 hover:text-amber-500"
            to="/"
            onClick={handleLogout}
          >
            Log out
          </Link>
        </>
      )}
      {!customer.id && (
        <>
          <Link className="text-amber-600 hover:text-amber-500" to="/login">
            Login
          </Link>
          <Link className="text-amber-600 hover:text-amber-500" to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
