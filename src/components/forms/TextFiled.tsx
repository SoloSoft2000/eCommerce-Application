import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormProps } from '../../interfaces/forms/form-props';

const names = [
  'firstName',
  'lastName',
  'city',
  'postcode',
  'billingCity',
  'billingPostcode',
];

function TextField({ placeholder, name }: FormProps): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const classes = names.includes(name) ? 'w-full sm:w-[47%]' : 'w-full';
  const errorMessage = useMemo(() => errors[name]?.message, [errors]);

  return (
    <div className={classes}>
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder={placeholder}
        type="text"
        {...register(name)}
      />
      {errorMessage && (
        <p className="text-sm text-red-500 h-5">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default TextField;
