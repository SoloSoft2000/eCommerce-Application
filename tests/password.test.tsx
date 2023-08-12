import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import Password from '../src/components/forms/Password'; 

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(),
}));

describe('Password', () => {
  it('renders empty password input', () => {
     const mockFormContext = {
      register: jest.fn(),
      formState: { errors: {} },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockFormContext);

    render(<Password />);

    const passwordInput = screen.getByPlaceholderText('Password*') as HTMLInputElement;
    expect(passwordInput.value).toBe('');
  });
});
