import React, { useCallback, useState, useEffect } from 'react';
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

  useEffect(() => {
    const followResizing = (): void => {
      if (window.innerWidth > 767) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', followResizing);

    return () => {
      window.removeEventListener('resize', followResizing);
    };
  }, []);

  useEffect(() => {
    const menuHandler = (): void => {
      setOpen(false);
    };

    document.addEventListener('mousedown', menuHandler);

    return () => {
      window.removeEventListener('mousedown', menuHandler);
    };
  }, [isOpen]);

  return (
    <header className='head-main'>
      <div className='logo'>
        <Link to="/">
          <img className="m-3" src={Img} alt="logo" width="150" />
        </Link>
        <Navigation isOpen={isOpen} />
        <button className='head-button' onClick={toggNavMenu}>
          {isOpen ? (
            <RxCross1 className='head-menu_icon' />
          ) : (
            <SlMenu className='head-menu_icon' />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
