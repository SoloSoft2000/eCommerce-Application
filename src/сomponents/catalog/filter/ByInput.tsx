import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { setTextMethods } from '../../../utils/reducers/productsListReducer';

function ByInputFilter(): React.JSX.Element {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const typedValue = e.target.value;
      setInputText(() => typedValue);
    },
    []
  );

  useEffect(() => {
    dispatch(setTextMethods(inputText));
  }, [inputText, dispatch]);

  return (
    <div className="relative h-10">
      <input
        type="text"
        className="absolute left-0 top-0 border-2 border-zinc-200 p-2 w-full h-full rounded"
        placeholder="Type a name..."
        value={inputText}
        onChange={handleInputChange}
      />
      <BsSearch className="absolute right-2 top-[35%]" />
    </div>
  );
}

export default ByInputFilter;
