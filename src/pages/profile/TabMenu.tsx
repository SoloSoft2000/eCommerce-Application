import React from "react";
// import FormClasses from "../../helpers/enum/form/classes";

type TabMenuProps = {
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

function TabMenu({ setActiveTab, activeTab }: TabMenuProps): React.JSX.Element {
  return (
    <div  className='w-full flex justify-around p-1'>
      <button
        onClick={(): void => setActiveTab('info')}
        className={ activeTab === 'info' ? 'text-amber-600' : 'hover:text-amber-500' }
      >Personal Info</button>
      <button
        onClick={(): void => setActiveTab('adresses')}
        className={ activeTab === 'adresses' ? 'text-amber-600' : 'hover:text-amber-500' }
      >Adresses</button>
    </div>
  );
}

export default TabMenu;
