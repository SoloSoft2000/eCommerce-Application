import React from 'react';
import { FormProps } from '../../interfaces/forms/form-props';

function SubmitFormButton({ value, classes }: FormProps): React.JSX.Element {
  return <input type="submit" value={value} className={classes} />;
}

export default SubmitFormButton;
