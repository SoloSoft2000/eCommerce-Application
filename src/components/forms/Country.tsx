import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormClasses from '../../enum/form/classes';
import FormProps from '../../interfaces/forms/form-props';

function Country({ name }: FormProps): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo(
    () => errors[name]?.message,
    [errors[name]?.message]
  );

  return (
    <div className={FormClasses.FULL_FIELD}>
      <select className={FormClasses.GENERAL_FIELD} {...register(name)}>
        <option value="" className={FormClasses.COUNTRY_OPTION_TEXT}>
          Country*
        </option>
        <option value="US">USA</option>
        <option value="CA">Canada</option>
      </select>
      {errorMessage && (
        <p className={FormClasses.MISTAKE_TEXT}>{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Country;
