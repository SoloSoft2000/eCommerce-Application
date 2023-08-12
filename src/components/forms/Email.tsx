import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

function Email(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo(
    () => errors.email?.message,
    [errors.email?.message]
  );

  return (
    <div className="w-full">
      <input
        className={`w-full py-3 px-1 border-b-2 border-zinc-200`}
        placeholder="Email*"
        type="email"
        {...register('email')}
        autoComplete="on"
      />
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default Email;
