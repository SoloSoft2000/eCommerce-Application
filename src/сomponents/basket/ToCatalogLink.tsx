import React from 'react';
import { Link } from 'react-router-dom';

function ToCatalogLink(): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <Link to="/catalog">
        <button className="w-full text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer mb-12">
          Go to Catalog Page
        </button>
      </Link>
    </div>
  );
}

export default ToCatalogLink;
