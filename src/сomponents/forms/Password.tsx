import React, { useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormStyles from '../../assets/styles/form.module.scss';

function Password(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const errorMessage = useMemo(
    () => errors.password?.message,
    [errors.password?.message]
  );

  const togglePassword = useCallback(() => {
    setPasswordIsShown(!passwordIsShown);
  }, [passwordIsShown]);

  return (
    <>
      <input
        className={FormStyles.general_field}
        placeholder="Password*"
        type={passwordIsShown ? 'text' : 'password'}
        autoComplete="on"
        {...register('password')}
      />
      {errorMessage && (
        <div className={FormStyles.mistake_text}>{errorMessage.toString()}</div>
      )}
      <input
        type="checkbox"
        name="passwordIsShown"
        checked={passwordIsShown}
        onChange={togglePassword}
        className={FormStyles.checkbox}
      />
      <label htmlFor="passwordIsShown">
        {passwordIsShown ? 'Hide Password' : 'Show Password'}
      </label>
    </>
  );
}

export default Password;
