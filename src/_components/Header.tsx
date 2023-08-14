import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Img from '../assets/images/logo4.jpg';

function Header(): React.JSX.Element {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between">
        <Link to="/">
          <img className="m-3" src={Img} alt="logo" width="150" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
