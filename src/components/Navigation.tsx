import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';

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
        <div className="flex">
          <AiOutlineUser className="mr-1" /> User Profile
        </div>
      </Link>
      <Link className="pr-4" to="/basket">
        <div className="flex">
          <SlBasket className="mr-1" /> Basket
        </div>
      </Link>
      <Link className="pr-4" to="/about">
        About Us
      </Link>
    </nav>
  );
}

export default Navigation;
