import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utils/reducers/store';
import Checkbox from './Checkbox';
import { setBrands } from '../../../utils/reducers/productsListReducer';

function BrandFilter(): React.JSX.Element {
  const brandsArray = useSelector((state: RootState) => state.products.brand);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([
    ...brandsArray,
  ]);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback((name: string) => {
    setSelectedBrands((prevSelectedBrands: string[]) => {
      if (prevSelectedBrands.includes(name)) {
        return prevSelectedBrands.filter((brand) => brand !== name);
      }
      return [...prevSelectedBrands, name];
    });
  }, []);

  useEffect(() => {
    dispatch(setBrands(selectedBrands));
  }, [selectedBrands]);

  useEffect(() => {
    setSelectedBrands(brandsArray);
  }, [brandsArray]);

  return (
    <div className="flex flex-col">
      <p className="font-semibold">Brand:</p>
      <Checkbox
        name={'ABC-Style'}
        isChecked={selectedBrands.includes('ABC-Style')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name={'Romantics LTD'}
        isChecked={selectedBrands.includes('Romantics LTD')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name={'NY-Fashion'}
        isChecked={selectedBrands.includes('NY-Fashion')}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default BrandFilter;
