import React from 'react';
import Img from '../images/img-02.png';

function UserProfilePage(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">User Profile</h3>
      <img className="mx-auto w-1/2 m-8" src={Img} alt="main picture" />
    </main>
  );
}

export default UserProfilePage;
