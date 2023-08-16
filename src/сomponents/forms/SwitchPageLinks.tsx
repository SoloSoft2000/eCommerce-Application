import React from 'react';
import { Link } from 'react-router-dom';
import FormProps from '../../helpers/interfaces/forms/form-props';
import FormClasses from '../../helpers/enum/form/classes';

function SwitchPageLinks({ pageName }: FormProps): React.JSX.Element {
  return (
    <div className={FormClasses.SITCH_PAGE_LINKS_WRAPPER}>
      <Link
        to="/login"
        className={
          pageName === 'register'
            ? FormClasses.ACTIVE_LINK
            : FormClasses.DISABLE_LINK
        }
      >
        Sign in
      </Link>

      <Link
        to="/register"
        className={
          pageName === 'register'
            ? FormClasses.DISABLE_LINK
            : FormClasses.ACTIVE_LINK
        }
      >
        Register
      </Link>
    </div>
  );
}

export default SwitchPageLinks;
