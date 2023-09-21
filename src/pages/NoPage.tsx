import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/images/404-error.png';
import ButtonLink from '../сomponents/ButtonLink';
import NoPageStyles from '../assets/styles/nopage.module.scss';

function NoPage(): React.JSX.Element {
  return (
    <main className={NoPageStyles.main}>
      <h3 className={NoPageStyles.h3}>This page is not found</h3>
      <img className={NoPageStyles.img} src={Img} alt="main picture" />
      <ButtonLink />
      <div className="flex flex-col">
        <p className="text-center m-4">or visit other pages:</p>
        <Link className={NoPageStyles.link} to="/catalog">
          Catalog Product
        </Link>
        <Link className={NoPageStyles.link} to="/basket">
          Basket
        </Link>
        <Link className={NoPageStyles.link} to="/about">
          About Us
        </Link>
      </div>
    </main>
  );
}

export default NoPage;
