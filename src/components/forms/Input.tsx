import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormProps } from '../../interfaces/forms/form-props';
import FormClasses from '../../enum/form/classes';

const names = [
  'firstName',
  'lastName',
  'shipCity',
  'shipPostcode',
  'billCity',
  'billPostcode',
];

function Input({ type, name, placeholder }: FormProps): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fiedWidth = names.includes(name)
    ? FormClasses.HALF_FIELD
    : FormClasses.FULL_FIELD;

  const errorMessage = useMemo(
    () => errors.email?.message,
    [errors.email?.message]
  );

  return (
    <div className={fiedWidth}>
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
