import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/reducers/store';
import Title from '../сomponents/forms/Title';
import TabMenu from './profile/TabMenu';
import UserInfo from './profile/UserInfo';
import UserAdresses from './profile/UserAdresses';
import LoginStyles from '../assets/styles/login.module.scss';
import FormStyles from '../assets/styles/form.module.scss';
import UserPassword from './profile/UserPassword';

function UserProfilePage(): React.JSX.Element {
  const navigate = useNavigate();
  const customer = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    if (!customer.id) {
      navigate('/login');
    }
  }, [customer, navigate]);

  return (
    <main className={LoginStyles.main}>
      <div className={LoginStyles.wrapper}>
        <Title classes={FormStyles.title} value="User Profile" />
        <TabMenu />

        <Routes>
          <Route path="" element={<UserInfo />} />
          <Route path="adresses" element={<UserAdresses />} />
          <Route path="passwords" element={<UserPassword />} />
        </Routes>
      </div>
    </main>
  );
}

export default UserProfilePage;
