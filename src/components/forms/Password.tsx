import React, { useState, ChangeEvent, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import passwordValidation from '../../utils/forms/passwordValidation';

function Password(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const errorMessage = errors.password?.message;

  const togglePassword = useCallback(() => {
    setPasswordIsShown((prevValue) => !prevValue);
  }, []);

  const handlePassword = useMemo(
    () => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPasswordValue(value);
    },
    []
  );

  return (
    <>
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Password*"
        type={passwordIsShown ? 'text' : 'password'}
        value={passwordValue}
        autoComplete="on"
        {...register('password', passwordValidation)}
        onChange={handlePassword}
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
