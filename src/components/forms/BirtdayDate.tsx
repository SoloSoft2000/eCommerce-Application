import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormClasses from '../../enum/form/classes';

function BirtdayDate(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo(
    () => errors.birthday?.message,
    [errors.birthday?.message]
  );

  return (
    <div className={FormClasses.FULL_FIELD}>
      <div className={FormClasses.GENERAL_FIELD}>
        <label htmlFor="Birthday" className={FormClasses.BIRTDAY_LABEL}>
          Date of birth*
        </label>
        <input type="date" {...register('birthday')} />
      </div>
      {errorMessage && (
        <p className={FormClasses.MISTAKE_TEXT}>{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default BirtdayDate;
