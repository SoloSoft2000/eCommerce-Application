import React from 'react';
import Img from '../images/img-03.png';

function AboutUsPage(): React.JSX.Element {
  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">About Us</h3>
      <img className="mx-auto w-1/2 m-8" src={Img} alt="main picture" />
    </div>
  );
}

export default AboutUsPage;
