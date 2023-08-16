import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <button className="w-full text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer">
          Back to Main page
        </button>
      </Link>
    </div>
  );
}

export default ButtonLink;
