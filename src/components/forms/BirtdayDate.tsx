import React from 'react';
import { useFormContext } from 'react-hook-form';
import birthdayValidation from '../../utils/forms/ageValidation';

function BirtdayDate(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors.Birthday?.message;

  return (
    <div className="w-full sm:w-[48%]">
      <div className="w-full border-b-2 border-zinc-200 py-3">
        <label htmlFor="birthday" className="text-gray-400 mr-1">
          Date of birth*
        </label>
        <input type="date" {...register('Birthday', birthdayValidation)} />
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm h-5">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default BirtdayDate;
