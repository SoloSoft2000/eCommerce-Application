import React from 'react';
import { Link } from 'react-router-dom';
import { FormProps } from '../../interfaces/forms/form-props';

const containerClasses =
  'w-full bg-zinc-200 flex justify-between p-1 rounded mb-10 sm:mb-20';
const activeLinkClasses = 'w-6/12 rounded text-center p-2 hover:bg-zinc-300';
const disabledLinkClasses =
  'bg-white rounded w-6/12 text-center p-2 cursor-default drop-shadow-sm';

function SwitchPageLinks({ pageName }: FormProps): React.JSX.Element {
  return (
    <div className={containerClasses}>
      <Link
        to="/login"
        className={
          pageName === 'register' ? activeLinkClasses : disabledLinkClasses
        }
      >
        Sign in
      </Link>

      <Link
        to="/register"
        className={
          pageName === 'register' ? disabledLinkClasses : activeLinkClasses
        }
      >
        Register
      </Link>
    </div>
  );
}

export default SwitchPageLinks;
