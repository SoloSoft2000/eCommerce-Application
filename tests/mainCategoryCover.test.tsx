import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import MainCategoryCover from '../src/сomponents/MainCategoryCover';

jest.mock('react-router-dom', () => ({
  Link: ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }): React.ReactElement => <a href={to}>{children}</a>,
}));

describe('MainCategoryCover', () => {
  it('renders the component with correct props', () => {
    const categoryData = {
      img: 'image-url',
      name: 'category',
    };

    const { getByRole, getByText } = render(
      <MainCategoryCover img={categoryData.img} name={categoryData.name} />
    );
    expect(getByText('category')).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute(
      'href',
      `/catalog/${categoryData.name}`
    );
  });
});
