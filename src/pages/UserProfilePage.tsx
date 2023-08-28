import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Title from '../сomponents/forms/Title';
import TabMenu from './profile/TabMenu';
import UserInfo from './profile/UserInfo';
import UserAdresses from './profile/UserAdresses';
import LoginStyles from '../assets/styles/login.module.scss';
import FormStyles from '../assets/styles/form.module.scss';

function UserProfilePage(): React.JSX.Element {
  const navigate = useNavigate();
  const customer = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    if (!customer.id) {
      navigate('/login');
    }
  }, [customer, navigate]);

  const [activeTab, setActiveTab] = useState('info');

  return (
    <main className={LoginStyles.main}>
      <div className={LoginStyles.wrapper}>
        <Title classes={FormStyles.title} value="User Profile" />
        <TabMenu setActiveTab={setActiveTab} activeTab={activeTab} />

        {activeTab === 'info' && <UserInfo />}
        {activeTab === 'adresses' && <UserAdresses />}
      </div>
    </main>
  );
}

export default UserProfilePage;
