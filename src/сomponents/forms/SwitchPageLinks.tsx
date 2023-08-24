import React from 'react';
import { Link } from 'react-router-dom';
import FormProps from '../../helpers/interfaces/forms/form-props';

function SwitchPageLinks({ pageName }: FormProps): React.JSX.Element {
  return (
    <div className="sitch_page_links_wrapper">
      <Link
        to="/login"
        className={pageName === 'register' ? 'active_link' : 'disable_link'}
      >
        Sign in
      </Link>

      <Link
        to="/register"
        className={pageName === 'register' ? 'disable_link' : 'active_link'}
      >
        Register
      </Link>
    </div>
  );
}

export default SwitchPageLinks;
