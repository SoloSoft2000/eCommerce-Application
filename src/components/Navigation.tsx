import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(): React.JSX.Element {
  return (
    <nav className="flex justify-between">
      <Link className="pr-4" to="/">
        Main
      </Link>
      <Link className="pr-4" to="/login">
        Login
      </Link>
      <Link className="pr-4" to="/register">
        Register
      </Link>
      <Link className="pr-4" to="/register">
        Catalog Product
      </Link>
      <Link className="pr-4" to="/register">
        User Profile
      </Link>
      <Link className="pr-4" to="/register">
        Basket
      </Link>
      <Link className="pr-4" to="/register">
        About Us
      </Link>
    </nav>
  );
}

export default Navigation;
