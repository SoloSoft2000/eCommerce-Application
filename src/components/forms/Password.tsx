import React, { useState, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { passwordValidation } from '../../utils/forms/validation';

function Password(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors.Password?.message;

  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  function togglePassword(): void {
    setPasswordIsShown((prevValue) => !prevValue);
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setPasswordValue(() => value);
  }

  return (
    <>
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Password*"
        type={passwordIsShown ? 'text' : 'password'}
        value={passwordValue}
        autoComplete="false"
        {...register('Password', passwordValidation)}
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
        <span className="text-xs text-red-500 h-3 px-2">
          {' '}
          {errorMessage.toString()}
        </span>
      )}
    </>
  );
}

export default Password;
