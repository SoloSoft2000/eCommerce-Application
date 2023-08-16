import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/images/404-error.png';
import ButtonLink from '../сomponents/ButtonLink';
import NoPageClasses from '../helpers/enum/components/noPageClasses';

function NoPage(): React.JSX.Element {
  return (
    <main className={NoPageClasses.MAIN}>
      <h3 className={NoPageClasses.H3}>This page is not found</h3>
      <img className={NoPageClasses.IMG} src={Img} alt="main picture" />
      <ButtonLink />
      <div className="flex flex-col">
        <p className="text-center m-4">or visit other pages:</p>
        <Link className={NoPageClasses.LINK} to="/catalog">
          Catalog Product
        </Link>
        <Link className={NoPageClasses.LINK} to="/basket">
          Basket
        </Link>
        <Link className={NoPageClasses.LINK} to="/about">
          About Us
        </Link>
      </div>
    </main>
  );
}

export default NoPage;
