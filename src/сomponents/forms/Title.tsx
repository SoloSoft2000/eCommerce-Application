import React from 'react';
import FormProps from '../../helpers/interfaces/forms/form-props';

function Title({ value, classes }: FormProps): React.JSX.Element {
  return <h2 className={classes}>{value}</h2>;
}

export default Title;
