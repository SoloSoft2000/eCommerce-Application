import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

function Country(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo(
    () => errors.Country?.message,
    [errors.Country?.message]
  );

  return (
    <div className="w-full sm:w-[47%]">
      <select
        className="w-full border-b-2 border-zinc-200 py-[0.95rem] px-1"
        {...register('Country')}
      >
        <option value="" className="text-gray-400">
          Country*
        </option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      {errorMessage && (
        <p className="text-xs text-red-500 text-sm h-5">
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
}

export default Country;
