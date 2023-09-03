import React, { useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormStyles from '../../assets/styles/form.module.scss';

function Password({ fieldName = 'password' }: { fieldName?: string }): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const errorMessage = useMemo(
    () => errors[fieldName]?.message,
    [errors[fieldName]?.message]
  );

  const togglePassword = useCallback(() => {
    setPasswordIsShown(!passwordIsShown);
  }, [passwordIsShown]);

  return (
    <>
      <input
        className={FormStyles.general_field}
        placeholder={`${fieldName === 'password' || fieldName === 'oldPassword' ? 'Password' : 'Repeat password'}*`}
        type={passwordIsShown ? 'text' : 'password'}
        autoComplete="on"
        {...register(fieldName)}
      />
      {errorMessage && (
        <div className={FormStyles.mistake_text}>{errorMessage.toString()}</div>
      )}
      <input
        type="checkbox"
        name={`${fieldName}IsShown`}
        checked={passwordIsShown}
        onChange={togglePassword}
        className={FormStyles.checkbox}
      />
      <label htmlFor={`${fieldName}IsShown`}>
        {passwordIsShown ? 'Hide Password' : 'Show Password'}
      </label>
    </>
  );
}

export default Password;
