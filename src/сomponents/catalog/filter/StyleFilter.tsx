import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utils/reducers/store';
import Checkbox from './Checkbox';
import { setStyles } from '../../../utils/reducers/productsListReducer';

function StyleFilter(): React.JSX.Element {
  const stylesArray = useSelector((state: RootState) => state.products.style);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([
    ...stylesArray,
  ]);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(
    (name: string) => {
      setSelectedStyles((prevSelectedStyles: string[]) => {
        if (prevSelectedStyles.includes(name)) {
          return prevSelectedStyles.filter((style) => style !== name);
        }
        return [...prevSelectedStyles, name];
      });
    },
    [selectedStyles]
  );

  useEffect(() => {
    dispatch(setStyles(selectedStyles));
  }, [selectedStyles]);

  useEffect(() => {
    setSelectedStyles(stylesArray);
  }, [stylesArray]);

  return (
    <div className="flex flex-col">
      <p className="font-semibold">Style:</p>
      <Checkbox
        name={'Modern'}
        isChecked={selectedStyles.includes('Modern')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name={'Retro'}
        isChecked={selectedStyles.includes('Retro')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name={'Casual'}
        isChecked={selectedStyles.includes('Casual')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name={'Chic'}
        isChecked={selectedStyles.includes('Chic')}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default StyleFilter;
