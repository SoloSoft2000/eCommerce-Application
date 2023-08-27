import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCover({
  img,
  name,
}: {
  [key: string]: string;
}): React.JSX.Element {
  return (
    <Link to={`/catalog/${name}`}>
      <div className="border-[1px] border-zinc-200 w-[15rem] h-[18rem] h-auto bg-white rounded relative cursor-pointer overflow-hidden pb-2 text-center hover:text-orange-500 hover:drop-shadow-lg">
        <div className="w-full object-bottom w-[15rem] h-[15rem] overflow-hidden rounded">
          <img className="object-cover w-full" src={img} alt={name} />
        </div>
        <h4 className="text-xl">{name}</h4>
      </div>
    </Link>
  );
}

export default CategoryCover;
