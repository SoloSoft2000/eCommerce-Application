import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { emaildValidation } from '../../utils/forms/validation';

function Email(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors.Email?.message;

  return (
    <div className="w-full">
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Email*"
        type="email"
        {...register('Email', emaildValidation)}
      />
      {errorMessage && (
        <p className="text-red-500 text-[12px] h-5">
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
}

export default Email;
