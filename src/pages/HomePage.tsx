import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/store';
import Main from '../components/Main';

function HomePage(): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);
  return <div>{<h3>Welcome back, {customer.firstName}</h3>}<Main /></div>;
}

export default HomePage;
