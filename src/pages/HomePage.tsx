import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/store';


function HomePage(): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer)
  return <div>{<h3>Welcome back, {customer.firstName}</h3>}</div>;
}

export default HomePage;
