import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Store } from 'redux';
import UserInfo from '../src/pages/profile/UserInfo';
import updateUser from '../src/utils/sdk/updateUser';

jest.mock('../src/utils/sdk/updateUser', () => jest.fn().mockResolvedValue({}));

const mockStore = configureStore([]);

describe('UserInfo component', () => {
  let store: Store;

  beforeEach(() => {
    store = mockStore({
      customer: {
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        id: 'id1'
      },
    });
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <UserInfo />
      </Provider>
    );

    expect(screen.getByText('E-Mail:')).toBeInTheDocument();
    expect(screen.getByText('First Name:')).toBeInTheDocument();
    expect(screen.getByText('Last Name:')).toBeInTheDocument();
    expect(screen.getByText('BirthDay:')).toBeInTheDocument();
  });

  it('store data correctly', async () => {
    render(
      <Provider store={store}>
        <UserInfo />
      </Provider>
    );

    const emailInput = screen.queryByPlaceholderText('Email*:');
    expect(emailInput).toHaveValue('test@example.com');
    expect(emailInput).toHaveAttribute('readOnly');

    const fnameInput = screen.queryByPlaceholderText('First Name*:');
    expect(fnameInput).toHaveValue('John');

    const lnameInput = screen.queryByPlaceholderText('Last Name*:');
    expect(lnameInput).toHaveValue('Doe');
  });


  it('allows user to edit information', async () => {

    render(
      <Provider store={store}>
        <UserInfo />
      </Provider>
    );

    const btnEdit = screen.getByRole('button', { name: 'Edit' });
    expect(btnEdit).toBeInTheDocument();

    fireEvent.click(btnEdit);

    await waitFor(() => {
      const saveButton = screen.getByRole('button', { name: 'Save' });
      expect(saveButton).toBeInTheDocument();
    });

    const btnSave = screen.getByRole('button', { name: 'Save' });
    expect(btnSave).toBeInTheDocument();

    const emailInput = screen.queryByPlaceholderText('Email*:');
    expect(emailInput).not.toHaveAttribute('readOnly');
    if (emailInput)
      fireEvent.change(emailInput, 'updated@example.com');

    const fnameInput = screen.queryByPlaceholderText('First Name*:');
    expect(fnameInput).not.toHaveAttribute('readOnly');
    if (fnameInput)
      fireEvent.change(fnameInput, 'Updated First');

    const lnameInput = screen.queryByPlaceholderText('Last Name*:');
    expect(lnameInput).not.toHaveAttribute('readOnly');
    if (lnameInput)
      fireEvent.change(lnameInput, 'Updated Last');

    fireEvent.click(btnSave);
    await waitFor(() => {
      expect(updateUser).toHaveBeenCalled();
    });
  });
  
  it('cancels editing and resets values', async () => {
    render(
      <Provider store={store}>
        <UserInfo />
      </Provider>
    );

    const btnEdit = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(btnEdit);
    let cancelButton: HTMLElement | undefined;
    await waitFor(() => {
      cancelButton = screen.getByRole('button', { name: 'Cancel' });
      expect(cancelButton).toBeInTheDocument();
    });

    const emailInput = screen.queryByPlaceholderText('Email*:');
    if (emailInput)
      fireEvent.change(emailInput, 'updated@example.com');

    const fnameInput = screen.queryByPlaceholderText('First Name*:');
    if (fnameInput)
      fireEvent.change(fnameInput, 'Updated First');

    const lnameInput = screen.queryByPlaceholderText('Last Name*:');
    if (lnameInput)
      fireEvent.change(lnameInput, 'Updated Last');

    if(cancelButton)
      fireEvent.click(cancelButton);

    await waitFor(() => {
      const ubtnEdit = screen.getByRole('button', { name: 'Edit' });
      expect(ubtnEdit).toBeInTheDocument();
    });

    expect(emailInput).toHaveValue('test@example.com');
    expect(fnameInput).toHaveValue('John');
    expect(lnameInput).toHaveValue('Doe');

    expect(emailInput).toHaveAttribute('readOnly');
    expect(fnameInput).toHaveAttribute('readOnly');
    expect(lnameInput).toHaveAttribute('readOnly');
  });
});
