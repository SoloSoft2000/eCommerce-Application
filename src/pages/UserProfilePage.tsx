import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../assets/images/img-02.png';
import { RootState } from '../utils/reducers/store';

function UserProfilePage(): React.JSX.Element {
  const navigate = useNavigate();
  const customer = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    if (!customer.id) {
      navigate("/login");
    }
  }, [customer, navigate]);
  
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">User Profile</h3>
      <img className="mx-auto w-1/2 m-8" src={Img} alt="main picture" />
    </main>
  );
}

export default UserProfilePage;
