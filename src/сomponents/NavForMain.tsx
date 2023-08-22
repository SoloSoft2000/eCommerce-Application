import React from 'react';
import { Link } from 'react-router-dom';
import NavMainClasses from '../helpers/enum/components/navMainClasses';

function NavForMain(): React.JSX.Element {
  return (
    <>
      <nav className={NavMainClasses.MAIN}>
        <Link className={NavMainClasses.USER_LINK} to="/login">
          Login
        </Link>
        <Link className={NavMainClasses.USER_LINK} to="/register">
          Register
        </Link>
        <Link className={NavMainClasses.LINK} to="/catalog">
          Catalog Product
        </Link>
        <Link className={NavMainClasses.LINK} to="/product">
          Detailed Product
        </Link>
        <Link className={NavMainClasses.LINK} to="/profile">
          User Profile
        </Link>
        <Link className={NavMainClasses.LINK} to="/basket">
          Basket
        </Link>
        <Link className={NavMainClasses.LINK} to="/about">
          About Us
        </Link>
      </nav>
    </>
  );
}

export default NavForMain;
