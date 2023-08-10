import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormProps } from '../../interfaces/forms/form-props';
import textFieldsValidation from '../../utils/forms/textFields/validation';

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

  const elementName = name;
  const validationFunction = textFieldsValidation[elementName];

  const errorMessage = errors[elementName]?.message;

  const classes = names.includes(name) ? 'w-full sm:w-[47%]' : 'w-full';
  return (
    <div className={classes}>
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder={placeholder}
        type="text"
        {...register(elementName, validationFunction)}
      />
      {errorMessage && (
        <p className="text-sm text-red-500 h-5">{errorMessage.toString()}</p>
      )}
    </div>
  );
}

export default TextField;
