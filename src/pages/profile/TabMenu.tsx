import React from 'react';
import FormStyles from '../../assets/styles/form.module.scss';

type TabMenuProps = {
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

function TabMenu({ setActiveTab, activeTab }: TabMenuProps): React.JSX.Element {
  return (
    <div className={FormStyles.switch_page_links_wrapper}>
      <button
        onClick={(): void => setActiveTab('info')}
        className={
          activeTab === 'info'
            ? FormStyles.disable_link
            : FormStyles.active_link
        }
      >
        Personal Info
      </button>
      <button
        onClick={(): void => setActiveTab('adresses')}
        className={
          activeTab === 'adresses'
            ? FormStyles.disable_link
            : FormStyles.active_link
        }
      >
        Adresses
      </button>
      <button
        onClick={(): void => setActiveTab('passwords')}
        className={
          activeTab === 'passwords'
            ? FormStyles.disable_link
            : FormStyles.active_link
        }
      >
        Change password
      </button>
    </div>
  );
}

export default TabMenu;
