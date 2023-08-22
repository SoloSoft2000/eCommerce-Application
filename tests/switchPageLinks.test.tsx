import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SwitchPageLinks from '../src/сomponents/forms/SwitchPageLinks';

describe('SwitchPageLinks', () => {
  it('renders links with the provided pageName and they are not null', () => {
    const pageName = 'register';

    const { getByText } = render(
      <Router>
        <SwitchPageLinks pageName={pageName} />
      </Router>
    );

    const signInLink = getByText('Sign in');
    const registerLink = getByText('Register');

    expect(signInLink).not.toBeNull();
    expect(registerLink).not.toBeNull();
  });
});
