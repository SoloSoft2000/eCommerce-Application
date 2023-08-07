import React from 'react';
import Navigation from './Navigation';

function Header(): React.JSX.Element {
  return (
    <header className='container mx-auto'>
      <div className='flex justify-between'>
      <h1 className="text-xl text-stone-400 font-bold">eCommerce Application</h1>
      <Navigation />
      </div>
    </header>
  );
}

export default Header;
