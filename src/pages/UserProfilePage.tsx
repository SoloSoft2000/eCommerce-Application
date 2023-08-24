import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Title from '../сomponents/forms/Title';
import TabMenu from './profile/TabMenu';
import UserInfo from './profile/UserInfo';
import Adresses from './profile/Adresses';

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
    <main className="login-main">
      <div className="login-wrapper">
        <Title classes="form-title" value="User Profile" />
        <TabMenu setActiveTab={setActiveTab} activeTab={activeTab} />

        {activeTab === 'info' && <UserInfo />}
        {activeTab === 'adresses' && <Adresses />}
      </div>
    </main>
  );
}

export default UserProfilePage;
