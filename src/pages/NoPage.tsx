import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/images/404-error.png';
import ButtonLink from '../components/ButtonLink';

function NoPage(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">
        This page is not found
      </h3>
      <img
        className="mx-auto m-12 animate-bounce"
        src={Img}
        alt="main picture"
      />
      <ButtonLink />
      <div className="flex flex-col">
        <p className="text-center m-4">or visit other pages:</p>
        <Link
          className="text-center hover:text-slate-400 cursor-pointer"
          to="/catalog"
        >
          Catalog Product
        </Link>
        <Link
          className="text-center hover:text-slate-400 cursor-pointer"
          to="/basket"
        >
          Basket
        </Link>
        <Link
          className="text-center hover:text-slate-400 cursor-pointer"
          to="/about"
        >
          About Us
        </Link>
      </div>
    </main>
  );
}

export default NoPage;
