import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubmitFormButton from '../src/components/forms/SubmitFormBtn';

describe('SubmitFormButton', () => {
  it('renders with the provided value and expected classes', () => {
    const value = 'Submit';
    const classes =
      'w-full text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer';

    const { getByDisplayValue } = render(
      <SubmitFormButton value={value} classes={classes} />
    );

    const submitBtn = getByDisplayValue(value);
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveClass(classes);
  });
});
