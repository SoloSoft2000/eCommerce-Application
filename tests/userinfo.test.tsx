import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Customer } from '@commercetools/platform-sdk';
import UserInfo from '../src/pages/profile/UserInfo';

describe('UserInfo component', () => {
  const mockShowNotification = jest.fn();
  const mockDispatch = jest.fn();
  const mockUpdateUser = jest.fn();
  const mockSetCustomer = jest.fn();

  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: (): jest.Mock => mockDispatch,
  }));

  jest.mock('../src/utils/sdk/updateUser', () => jest.fn(() => mockUpdateUser()));
  
  interface SetCustomerAction {
    type: 'SET_CUSTOMER';
    payload: Customer;
  }
  
  jest.mock('../src/utils/reducers/customerReducer', () => ({
    setCustomer: (user: Customer): SetCustomerAction => ({
      type: 'SET_CUSTOMER',
      payload: user,
    }),
  }));

  jest.mock('../src/utils/notification/NotificationContext', () => ({
    __esModule: true,
    default: React.createContext(mockShowNotification),
  }));

  beforeEach(() => {
    mockDispatch.mockClear();
    mockUpdateUser.mockClear();
    mockSetCustomer.mockClear();
    mockShowNotification.mockClear();
  });

  test('renders the component', () => {
    const { getByText } = render(<UserInfo />);
    expect(getByText('Edit')).toBeInTheDocument();
  });

  test('clicking Edit button starts editing', () => {
    const { getByText } = render(<UserInfo />);
    fireEvent.click(getByText('Edit'));
    expect(getByText('Save')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  test('clicking Cancel button cancels editing', () => {
    const { getByText } = render(<UserInfo />);
    fireEvent.click(getByText('Edit'));
    fireEvent.click(getByText('Cancel'));
    expect(getByText('Edit')).toBeInTheDocument();
  });

  test('submitting the form updates user info', async () => {
    const { getByText, getByLabelText } = render(<UserInfo />);
    fireEvent.click(getByText('Edit'));

    const emailInput = getByLabelText('E-Mail:');
    const firstNameInput = getByLabelText('First Name:');
    const lastNameInput = getByLabelText('Last Name:');
    const saveButton = getByText('Save');

    fireEvent.change(emailInput, { target: { value: 'new@example.com' } });
    fireEvent.change(firstNameInput, { target: { value: 'NewFirst' } });
    fireEvent.change(lastNameInput, { target: { value: 'NewLast' } });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockUpdateUser).toHaveBeenCalledTimes(1);
      expect(mockSetCustomer).toHaveBeenCalledWith(expect.anything());
      expect(mockShowNotification).toHaveBeenCalledWith('User info updated', 'success');
    });
  });

});
