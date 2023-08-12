import React from 'react';
import { FormProps } from '../../interfaces/forms/form-props';
import Country from './Country';
import TextField from './TextFiled';

function Address({ name, value }: FormProps): React.JSX.Element {
  return (
    <fieldset>
      <legend className="py-2 px-1 font-bold">{name} address*:</legend>
      <Country />
      <div className="flex justify-between flex-wrap">
        <TextField name={`${value}City`} placeholder="City / Town*" />
        <TextField name={`${value}Postcode`} placeholder="Postcode / ZIP *" />
      </div>
      <TextField name={`${value}Street`} placeholder="Street Address*" />
    </fieldset>
  );
}

export default Address;
