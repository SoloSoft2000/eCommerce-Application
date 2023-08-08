import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  togglePassword,
  setPasswordValue,
} from '../../reducers/passwordReduce';
import { RootState } from '../../reducers/store';

function Password(): React.JSX.Element {
  const dispatch = useDispatch();

  const passwordIsShown = useSelector(
    (state: RootState) => state.password.isShown
  );
  const passwordValue = useSelector((state: RootState) => state.password.value);

  function handlePassword(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    dispatch(setPasswordValue(value));
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
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onChange={() => dispatch(togglePassword())}
        className="mr-2 inline-block my-3"
      />
      <label htmlFor="passwordIsShown">
        {passwordIsShown ? 'Hide Password' : 'Show Password'}
      </label>
    </>
  );
}

export default Password;
