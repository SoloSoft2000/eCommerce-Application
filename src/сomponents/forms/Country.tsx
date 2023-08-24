import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
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
    <div className="full_field">
      <select className="general_field" {...register(name)}>
        <option value="" className="country_option_text">
          Country*
        </option>
        <option value="US">USA</option>
        <option value="CA">Canada</option>
      </select>
      {errorMessage && (
        <p className="mistake_text">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Country;
