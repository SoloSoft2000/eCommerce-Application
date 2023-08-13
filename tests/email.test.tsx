import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import Input from '../src/components/forms/Input';

jest.mock('react-hook-form');

describe('Input', () => {
  it('does not render the component when null', () => {
    const mockFormContext = {
      register: jest.fn(),
      formState: { errors: { email: { message: 'Test error message' } } },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockFormContext);

    render(
      <Input name="email" placeholder="Email*" type="email" width="w-1/2" />
    );

    const inputElement = screen.queryByPlaceholderText('Email*');
    expect(inputElement).not.toBeNull();
  });
});
