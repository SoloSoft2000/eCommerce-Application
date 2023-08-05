import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(): React.JSX.Element {
  return (
    <nav className='flex justify-between'>
      <h1>eCommerce Application</h1>
      <Link to="/">Main</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navigation;
