import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import BirtdayDate from '../src/сomponents/forms/BirtdayDate';

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(),
}));

describe('BirtdayDate', () => {
  it('does not render the input element', () => {
    const mockJest = {
      register: jest.fn(),
      formState: { errors: {} },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockJest);

    render(<BirtdayDate readonly={false}/>);

    const inputEl = screen.queryByLabelText('Date of birth*');
    expect(inputEl).toBeNull();
  });
});
