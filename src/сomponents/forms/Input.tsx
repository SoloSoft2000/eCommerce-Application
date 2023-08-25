import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormProps from '../../helpers/interfaces/forms/form-props';
import FormStyles from '../../assets/styles/form.module.scss';

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
        className={FormStyles.general_field}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        autoComplete="on"
      />
      {errorMessage && (
        <p className={FormStyles.mistake_text}>{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Input;
