import React, { useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

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
        className="general_field"
        placeholder="Password*"
        type={passwordIsShown ? 'text' : 'password'}
        autoComplete="on"
        {...register('password')}
      />
      {errorMessage && (
        <div className="mistake_text">{errorMessage.toString()}</div>
      )}
      <input
        type="checkbox"
        name="passwordIsShown"
        checked={passwordIsShown}
        onChange={togglePassword}
        className="checkbox"
      />
      <label htmlFor="passwordIsShown">
        {passwordIsShown ? 'Hide Password' : 'Show Password'}
      </label>
    </>
  );
}

export default Password;
