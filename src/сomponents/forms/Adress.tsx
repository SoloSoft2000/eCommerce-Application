import React from 'react';
import Input from './Input';
import Country from './Country';
import FormProps from '../../helpers/interfaces/forms/form-props';

function Address({ type }: FormProps): React.JSX.Element {
  return (
    <fieldset>
      <Country name={`${type}Country`} />
      <div className="form_container">
        <Input
          name={`${type}City`}
          placeholder="City / Town*"
          type="text"
          width="half_field"
        />
        <Input
          name={`${type}Postcode`}
          placeholder="Postcode / ZIP *"
          type="text"
          width="half_field"
        />
      </div>
      <Input
        name={`${type}Street`}
        placeholder="Street Address*"
        type="text"
        width="full_field"
      />
    </fieldset>
  );
}

export default Address;
