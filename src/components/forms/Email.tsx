import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

const generalClasses = 'w-full py-3 px-1';

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
        className={
          errorMessage
            ? `${generalClasses} outline-2 outline-red-300`
            : `${generalClasses} border-b-2 border-zinc-200`
        }
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
