import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormStyles from '../../assets/styles/form.module.scss';

function TabMenu(): React.JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className={FormStyles.switch_page_links_wrapper}>
      <button
        onClick={(): void => navigate('info')}
        className={currentPath.includes('info') ? FormStyles.disable_link : FormStyles.active_link }
      >
        Personal Info
      </button>
      <button
        onClick={(): void => navigate('adresses')}
        className={currentPath.includes('adresses') ? FormStyles.disable_link : FormStyles.active_link }
      >
        Adresses
      </button>
      <button
        onClick={(): void => navigate('passwords')}
        className={currentPath.includes('passwords') ? FormStyles.disable_link : FormStyles.active_link }
      >
        Change password
      </button>
    </div>
  );
}

export default TabMenu;
