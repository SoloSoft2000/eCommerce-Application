import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormProps from '../../helpers/interfaces/forms/form-props';
import { setCategory } from '../../utils/reducers/productsListReducer';

function CategoryCover({ img, name }: FormProps): React.JSX.Element {
  const backgroundImage = {
    backgroundImage: `url(${img})`,
  };

  const dispatch = useDispatch();

  const handleCategory = useCallback(
    (catName: string): void => {
      dispatch(setCategory(catName));
    },
    [dispatch]
  );
  console.log(name);
  return (
    <Link
      onClick={(): void => handleCategory(name)}
      to={`/catalog/${name}`}
      className="flex justify-center items-center mx-auto w-full md:w-[45%] h-72 rounded-2xl bg-cover bg-no-repeat bg-center hover:opacity-50 text-xl font-bold"
      style={backgroundImage}
    >
      <span className="flex justify-center items-center w-36 h-12 bg-orange-300 rounded-xl drop-shadow-xl">
        {name}
      </span>
    </Link>
  );
}

export default CategoryCover;
