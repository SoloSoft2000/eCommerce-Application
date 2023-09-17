import React from 'react';
import Logo from './Logo';

function Footer(): React.JSX.Element {
  return (
    <footer className="container mx-auto left-0 z-7 w-full p-4 bg-white border-y border-gray-200">
      <div className="container flex justify-between">
        <div className="flex flex-col">
          <a
            className="text-xs text-gray-400"
            href="https://github.com/solosoft2000"
          >
            Eugene Solomonyk GitHub
          </a>
          <a
            className="text-xs text-gray-400"
            href="https://github.com/Yasya23"
          >
            Yana Zahoruiko GitHub
          </a>
          <a
            className="text-xs text-gray-400"
            href="https://github.com/Fault1err"
          >
            Olga Buksman GitHub
          </a>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
