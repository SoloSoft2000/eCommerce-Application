import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import Email from '../src/components/forms/Email'; 

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(),
}));

describe('Email', () => {
  it('does not render the component when null', () => {
    
    const mockFormContext = {
      register: jest.fn(),
      formState: { errors: { email: { message: 'Test error message' } } },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockFormContext);

    render(<Email />);

    const inputElement = screen.queryByPlaceholderText('Email*');
    expect(inputElement).not.toBeNull();
  });
});
