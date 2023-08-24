import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

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
    <div className="full_field">
      <div className="general_field">
        <label htmlFor="Birthday" className="birthday_label">
          Date of birth*
        </label>
        <input type="date" {...register('birthday')} />
      </div>
      {errorMessage && (
        <p className="mistake_text">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default BirtdayDate;
