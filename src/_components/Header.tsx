import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
import Img from '../assets/images/logo4.jpg';
import Navigation from './Navigation';

function Header(): React.JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const menuHandler = (): void => {
      setOpen(false);
    };

    document.addEventListener('mousedown', menuHandler);
  });
  return (
    <header className="container mx-auto">
      <div className="flex justify-between">
        <Link to="/">
          <img className="m-3" src={Img} alt="logo" width="150" />
        </Link>
        <Navigation isOpen={isOpen} />
        <button
          className="menu-btn mr-2 hidden max-md:block max-sm:block"
          onClick={(): void => setOpen(!isOpen)}
        >
          <SlMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
