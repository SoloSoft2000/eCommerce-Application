import React from 'react';
import { FormProps } from '../../interfaces/forms/form-props';
import Country from './Country';
import TextField from './TextFiled';

function Address({ name }: FormProps): React.JSX.Element {
  return (
    <fieldset>
      <legend className="py-2 px-1 font-bold">{name}</legend>
      <Country />
      <div className="flex justify-between flex-wrap">
        <TextField name="city" placeholder="City / Town*" />
        <TextField name="postcode" placeholder="Postcode / ZIP *" />
      </div>
      <TextField name="address" placeholder="Street Address*" />
    </fieldset>
  );
}

export default Address;
