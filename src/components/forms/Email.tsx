import React from 'react';
import { useFormContext } from 'react-hook-form';
import { emaildValidation } from '../../utils/forms/validation';
import { EmailProps } from '../../interfaces/forms/form-props';

function Email({ value, onChange }: EmailProps): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors.email?.message;

  return (
    <div className="w-full">
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Email*"
        type="email"
        value={value}
        {...register('email', emaildValidation)}
        onChange={onChange}
        autoComplete="on"
      />
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Email;
