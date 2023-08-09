import React from 'react';
import Img from '../images/img-01.png';

function Main(): React.JSX.Element {
  return <div className='container mx-auto'>
    <h3 className='text-xl font-bold pt-20 text-center'>Main page</h3>
    <img className='mx-auto w-3/4 m-8' src={Img} alt="main picture"/>
    </div>;
}

export default Main;
