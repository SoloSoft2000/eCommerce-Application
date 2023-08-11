import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TextField from '../src/components/forms/TextFiled'; 

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(() => ({
    register: jest.fn(),
    formState: { errors: {} },
  })),
}));

describe('TextField', () => {
  it('renders input element without errors', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder="Test Placeholder" name="testName" />
    );

    const element = getByPlaceholderText('Test Placeholder');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('w-full', 'border-b-2', 'border-zinc-200', 'py-3', 'px-1');
  });
});
