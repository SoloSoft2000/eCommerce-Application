import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormClasses from '../../helpers/enum/form/classes';
import FormProps from '../../helpers/interfaces/forms/form-props';

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
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      {errorMessage && (
        <p className={FormClasses.MISTAKE_TEXT}>{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Country;
