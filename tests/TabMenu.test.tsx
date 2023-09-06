import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import TabMenu from '../src/pages/profile/TabMenu';

test('renders TabMenu with correct links', () => {
  const { getByText } = render(
    <MemoryRouter>
      <TabMenu />
    </MemoryRouter>
  );

  const personalInfoLink = getByText('Personal Info');
  const addressesLink = getByText('Adresses');
  const changePasswordLink = getByText('Change password');

  expect(personalInfoLink).toBeInTheDocument();
  expect(addressesLink).toBeInTheDocument();
  expect(changePasswordLink).toBeInTheDocument();
});

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: (): jest.Mock => mockUseNavigate,
}));

test('navigates to correct route when buttons are clicked', () => {

  const { getByText } = render(
    <MemoryRouter>
      <TabMenu />
    </MemoryRouter>
  );

  const personalInfoLink = getByText('Personal Info');
  const addressesLink = getByText('Adresses');
  const changePasswordLink = getByText('Change password');

  fireEvent.click(personalInfoLink);
  expect(mockUseNavigate).toHaveBeenCalledWith('');
  fireEvent.click(addressesLink);
  expect(mockUseNavigate).toHaveBeenCalledWith('adresses');
  fireEvent.click(changePasswordLink);
  expect(mockUseNavigate).toHaveBeenCalledWith('passwords');
});
