import React, { useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import store, { RootState } from '../utils/reducers/store';
import { clearCustomer } from '../utils/reducers/customerReducer';
import { NavigationProps } from '../helpers/interfaces/layout/layout-props';
import NavStyles from '../assets/styles/nav.module.scss';
import NotificationContext from '../utils/notification/NotificationContext';
import { setCartCount } from '../utils/reducers/cartCountReducer';

function Navigation({ isOpen }: NavigationProps): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);
  const cartCount = useSelector((state: RootState) => state.cartCount);

  const dispatch = useDispatch();
  const showNotification = useContext(NotificationContext);

  const handleLogout = useCallback(() => {
    dispatch(clearCustomer());
    store.dispatch(setCartCount(0));
    showNotification('Good Bye!', 'success');
  }, [dispatch]);

  const mainClasses = isOpen
    ? `${NavStyles.main} translate-x-full`
    : NavStyles.main;

  return (
    <nav className={mainClasses}>
      <Link className={NavStyles.link} to="/">
        Main
      </Link>
      <>
        <Link className={NavStyles.link} to="/catalog">
          Catalog Product
        </Link>
        <Link className={NavStyles.link} to="/basket">
          <div className={NavStyles.icons}>
            <SlBasket size={28} className="mr-1" />
            <span className="absolute left-4 bottom-3 bg-amber-500 text-white py-1 px-2 rounded-full text-xs">
              {cartCount}
            </span>
          </div>
        </Link>
      </>
      <Link className={NavStyles.link} to="/about">
        About Us
      </Link>

      {customer.id && (
        <>
          <Link className={NavStyles.link} to="/profile">
            <div className={NavStyles.icons}>
              <AiOutlineUser className="mr-1" /> User Profile
            </div>
          </Link>
          <Link className={NavStyles.user_link} to="/" onClick={handleLogout}>
            Log out
          </Link>
        </>
      )}
      {!customer.id && (
        <>
          <Link className={NavStyles.user_link} to="/login">
            Login
          </Link>
          <Link className={NavStyles.user_link} to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
