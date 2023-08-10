import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/store';
import Main from '../components/Main';

function HomePage(): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);
  return <div className='container mx-auto'>
    {<h3 className='text-l font-bold pt-10 ml-20'>Welcome back, {customer.firstName}</h3>}
    <Main />
  </div>;
}

export default HomePage;
