import React from 'react';
import Input from './Input';
import Country from './Country';
import FormClasses from '../../helpers/enum/form/classes';
import FormProps from '../../helpers/interfaces/forms/form-props';

function Address({ type }: FormProps): React.JSX.Element {
  return (
    <fieldset>
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
