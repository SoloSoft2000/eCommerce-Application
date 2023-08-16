import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Title from '../src/сomponents/forms/Title';

describe('Title component', () => {
  it('renders correctly with given value and classes', () => {
    const value = 'Create an account';
    const classes = 'p-2 text-white';

    const { getByText } = render(<Title value={value} classes={classes} />);

    const titleElement = getByText(value);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(classes);
  });
});
