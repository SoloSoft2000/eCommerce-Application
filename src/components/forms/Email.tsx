import React from 'react';
import { useFormContext } from 'react-hook-form';
import { emaildValidation } from '../../utils/forms/validation';

function Email(): React.JSX.Element {
  const generalClasses = 'w-full py-3 px-1';
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors.email?.message;

  return (
    <div className="w-full">
      <input
        className={
          errorMessage
            ? `${generalClasses} outline-2 outline-red-300`
            : `${generalClasses} border-b-2 border-zinc-200`
        }
        placeholder="Email*"
        type="email"
        {...register('email', emaildValidation)}
        autoComplete="on"
      />
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Email;
