import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Input from '../src/_components/forms/Input';
import FormClasses from '../src/helpers/enum/form/classes';

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(() => ({
    register: jest.fn(),
    formState: { errors: {} },
  })),
}));

describe('Input', () => {
  it('renders input element without errors', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Test Placeholder" name="testName" />
    );

    const element = getByPlaceholderText('Test Placeholder');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(FormClasses.GENERAL_FIELD);
  });
});
