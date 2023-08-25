import React from 'react';
import { Link } from 'react-router-dom';
import FormProps from '../../helpers/interfaces/forms/form-props';
import FormStyles from '../../assets/styles/form.module.scss';

function SwitchPageLinks({ pageName }: FormProps): React.JSX.Element {
  return (
    <div className={FormStyles.switch_page_links_wrapper}>
      <Link
        to="/login"
        className={pageName === 'register' ? FormStyles.active_link : FormStyles.disable_link}
      >
        Sign in
      </Link>

      <Link
        to="/register"
        className={pageName === 'register' ? FormStyles.disable_link : FormStyles.active_link}
      >
        Register
      </Link>
    </div>
  );
}

export default SwitchPageLinks;
