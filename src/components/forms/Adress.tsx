import React from 'react';
import Input from './Input';
import Country from './Country';
import FormClasses from '../../enum/form/classes';
import FormProps from '../../interfaces/forms/form-props';

function Address({ name, type }: FormProps): React.JSX.Element {
  return (
    <fieldset>
      <legend className={FormClasses.ADDRESS_TITLE}>{name} address*:</legend>
      <Country name={`${type}Country`} />
      <div className={FormClasses.FORM_CONTAINER}>
        <Input
          name={`${type}City`}
          placeholder="City / Town*"
          type="text"
          width={FormClasses.HALF_FIELD}
        />
        <Input
          name={`${type}Postcode`}
          placeholder="Postcode / ZIP *"
          type="text"
          width={FormClasses.HALF_FIELD}
        />
      </div>
      <Input
        name={`${type}Street`}
        placeholder="Street Address*"
        type="text"
        width={FormClasses.FULL_FIELD}
      />
    </fieldset>
  );
}

export default Address;
