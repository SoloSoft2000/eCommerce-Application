import React, { useState } from 'react';
import LoginPageClasses from '../helpers/enum/pages/login';
import Title from '../сomponents/forms/Title';
import FormClasses from '../helpers/enum/form/classes';
import TabMenu from './profile/TabMenu';
import UserInfo from './profile/UserInfo';
import Adresses from './profile/Adresses';

function UserProfilePage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <main className={LoginPageClasses.MAIN}>
      <div className={LoginPageClasses.WRAPPER}>
        <Title classes={FormClasses.TITLE} value="User Profile" />
        <TabMenu setActiveTab={setActiveTab} activeTab={activeTab} />

        {activeTab === 'info' && <UserInfo />}
        {activeTab === 'adresses' && <Adresses />}
      </div>
    </main>
  );
}

export default UserProfilePage;
