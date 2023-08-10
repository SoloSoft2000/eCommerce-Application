import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(): React.JSX.Element {
  return (
    <nav className="flex justify-between m-8">
      <Link className="pr-4" to="/">
        Main
      </Link>
      <Link className="pr-4" to="/login">
        Login
      </Link>
      <Link className="pr-4" to="/register">
        Register
      </Link>
      <Link className="pr-4" to="/catalog">
      Catalog Product
      </Link>
      <Link className="pr-4" to="/product">
        Detailed Product
      </Link>
      <Link className="pr-4" to="/profile">
        User Profile
      </Link>
      <Link className="pr-4" to="/basket">
        Basket
      </Link>
      <Link className="pr-4" to="/about">
        About Us
      </Link>
    </nav>
  );
}

export default Navigation;
