import React from 'react';
import { FormProps } from '../../interfaces/forms/form-props';

function TextField({ placeholder, name }: FormProps): React.JSX.Element {
  const names = ['firstName', 'lastName', 'city', 'postcode'];
  const classes = names.includes(name) ? 'w-full sm:w-[47%]' : 'w-full';
  return (
    <div className={classes}>
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder={placeholder}
        type="text"
        name={name}
      />
      <p className="text-xs text-red-500 h-3"></p>
    </div>
  );
}

export default TextField;
