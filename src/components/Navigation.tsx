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
      <Link className="pr-4" to="/">
        Main
      </Link>
      {!customer.id && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <>
        <Link to="/catalog">Catalog Product</Link>
        <Link to="/product">Detailed Product</Link>
        {customer.id && (
          <Link to="/" onClick={handleLogout}>
            Log out
          </Link>
        )}
        <Link to="/profile">
          <div className="flex">
            <AiOutlineUser className="mr-1" /> User Profile
          </div>
        </Link>
        <Link to="/basket">
          <div className="flex">
            <SlBasket className="mr-1" /> Basket
          </div>
        </Link>
      </>
      <Link to="/about">About Us</Link>
    </nav>
  );
}

export default Navigation;
