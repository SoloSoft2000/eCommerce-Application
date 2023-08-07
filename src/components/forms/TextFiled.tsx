import React from 'react';
import FormProps from '../../interfaces/forms/form-props';

function TextField({ placeholder, name }: FormProps): React.JSX.Element {
  const names = ['firstName', 'lastName', 'city', 'postcode'];
  const classes = names.includes(name)
    ? 'w-[47%] border-b-2 border-zinc-200 py-3 px-1'
    : 'w-full border-b-2 border-zinc-200 py-3 px-1';
  return (
    <input
      className={classes}
      placeholder={placeholder}
      type="text"
      name={name}
    />
  );
}

export default TextField;
