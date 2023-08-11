import React, { useState, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

function Password(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const errorMessage = errors.password?.message;

  const togglePassword = useCallback(() => {
    setPasswordIsShown(!passwordIsShown);
  }, [passwordIsShown]);

  return (
    <>
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Password*"
        type={passwordIsShown ? 'text' : 'password'}
        autoComplete="on"
        {...register('password')}
      />
      <input
        type="checkbox"
        name="passwordIsShown"
        checked={passwordIsShown}
        onChange={togglePassword}
        className="mr-2 inline-block my-3"
      />
      <label htmlFor="passwordIsShown">
        {passwordIsShown ? 'Hide Password' : 'Show Password'}
      </label>
      {errorMessage && (
        <span className="inline-block	text-sm text-red-500 px-2">
          {' '}
          {errorMessage.toString()}
        </span>
      )}
    </>
  );
}

export default Password;
