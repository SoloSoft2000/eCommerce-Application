import React from 'react';
import { useFormContext } from 'react-hook-form';

function Email(): React.JSX.Element {
  const { register } = useFormContext();

  return (
    <input
      className="w-full border-b-2 border-zinc-200 py-3 px-1"
      placeholder="Email*"
      type="email"
      // name="Email"
      {...register('Email', {
        required: {
          value: true,
          message: 'required',
        },
      })}
    />
  );
}

export default Email;
