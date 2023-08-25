import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormStyles from '../../assets/styles/form.module.scss';

function BirtdayDate({ readonly }: { readonly: boolean }): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo(
    () => errors.dateOfBirth?.message,
    [errors.dateOfBirth?.message]
  );

  return (
    <div className={FormStyles.full_field}>
      <div className={FormStyles.general_field}>
        <label htmlFor="Birthday" className={FormStyles.birthday_label}>
          Date of birth*
        </label>
        <input type="date" readOnly={readonly} {...register('dateOfBirth')} />
      </div>
      {errorMessage && (
        <p className={FormStyles.mistake_text}>{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default BirtdayDate;
