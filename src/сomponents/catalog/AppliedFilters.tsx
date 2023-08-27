import React, { useCallback } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setSortMethods } from '../../utils/reducers/productsListReducer';
import { RootState } from '../../utils/reducers/store';

function AppliedFilter({
  name,
  sortMethod,
}: {
  [key: string]: string;
}): React.JSX.Element {
  const sort = useSelector((state: RootState) => state.products.sort);
  const dispatch = useDispatch();

  const handleFilterClick = useCallback(
    (sortOption: string) => {
      const sortAr = { ...sort };
      if (sortOption === 'sortByPrice') sortAr.sortByPrice = '';
      if (sortOption === 'sortByAbc') sortAr.sortByAbc = '';
      dispatch(setSortMethods(sortAr));
    },
    [dispatch, sort.sortByPrice, sort.sortByAbc]
  );

  return (
    <div
      className="flex justify-berween gap-3 p-2 border-2 rounded border-amber-500 cursor-pointer hover:bg-amber-100"
      onClick={(): void => handleFilterClick(sortMethod)}
    >
      <p>{name}</p>
      <span>
        <AiOutlineCloseCircle className="text-amber-500 h-full" />
      </span>
    </div>
  );
}

export default AppliedFilter;
