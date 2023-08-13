import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormProps from '../../interfaces/forms/form-props';
import FormClasses from '../../enum/form/classes';

function Input({
  type,
  name,
  placeholder,
  width,
}: FormProps): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo(
    () => errors[name]?.message,
    [errors[name]?.message]
  );

  return (
    <div className={width}>
      <input
        className={FormClasses.GENERAL_FIELD}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        autoComplete="on"
      />
      {errorMessage && (
        <p className={FormClasses.MISTAKE_TEXT}>{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Input;
