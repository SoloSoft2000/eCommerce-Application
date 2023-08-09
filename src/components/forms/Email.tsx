import React from 'react';
import { useFormContext } from 'react-hook-form';
import { emaildValidation } from '../../utils/forms/validation';

// interface ValidationRule<T> {
//   value: T;
//   message: string;
// }

// type Validation<T> = {
//   required?: ValidationRule<T>;
//   minLength?: ValidationRule<number>;
// };

// interface EmailProps<T> {
//   validation: Validation<boolean>;
// }

function Email(): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const message = errors.Email?.message?.toString();
  const error = errors.Email && message ? message : '';

  return (
    <div className="w-full">
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Email*"
        type="email"
        // name="Email"
        {...register('Email', emaildValidation)}
      />
      <p className="text-red-500 text-[12px] h-5">{error}</p>
    </div>
  );
}

export default Email;
