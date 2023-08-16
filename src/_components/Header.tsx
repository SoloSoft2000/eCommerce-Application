import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
import { RxCross1 } from 'react-icons/rx';
import Img from '../assets/images/logo4.jpg';
import Navigation from './Navigation';

function Header(): React.JSX.Element {
  const [isOpen, setOpen] = useState(false);

  const toggNavMenu = useCallback(() => {
    setOpen((prevValue) => !prevValue);
  }, [isOpen]);

  return (
    <header className="container mx-auto">
      <div className="flex justify-between max-md:items-center max-md:pr-2">
        <Link to="/">
          <img className="m-3" src={Img} alt="logo" width="150" />
        </Link>
        <Navigation isOpen={isOpen} />
        <button
          className="h-5 w-5 hidden max-md:inline-block"
          onClick={toggNavMenu}
        >
          {isOpen ? <RxCross1 className="w-full h-full transition-all duration-300 ease-in-out" /> : <SlMenu className="w-full h-full w-full h-full transition-all duration-300 ease-in-out" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
