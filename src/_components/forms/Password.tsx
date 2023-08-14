import React, { useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormClasses from '../../helpers/enum/form/classes';

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
        className={FormClasses.GENERAL_FIELD}
        placeholder="Password*"
        type={passwordIsShown ? 'text' : 'password'}
        autoComplete="on"
        {...register('password')}
      />
      {errorMessage && (
        <div className={FormClasses.MISTAKE_TEXT}>
          {errorMessage.toString()}
        </div>
      )}
      <input
        type="checkbox"
        name="passwordIsShown"
        checked={passwordIsShown}
        onChange={togglePassword}
        className={FormClasses.CHECKBOX}
      />
      <label htmlFor="passwordIsShown">
        {passwordIsShown ? 'Hide Password' : 'Show Password'}
      </label>
    </>
  );
}

export default Password;
