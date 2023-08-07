import React, { useState, ChangeEvent } from 'react';

function Password(): React.JSX.Element {
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
        name="Password"
        value={passwordValue}
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
    </>
  );
}

export default Password;
