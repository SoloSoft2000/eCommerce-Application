import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import CategoryCover from '../src/сomponents/catalog/CategoryCover';

jest.mock('react-router-dom', () => ({
  Link: ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }): React.ReactElement => <a href={to}>{children}</a>,
}));

describe('CategoryCover', () => {
  it('renders the component with correct props', () => {
    const categoryData = {
      img: 'image-url',
      parentName: 'parent-category',
      name: 'category',
    };

    const { getByAltText, getByRole, getByText } = render(
      <CategoryCover
        img={categoryData.img}
        parentName={categoryData.parentName}
        name={categoryData.name}
      />
    );
    expect(getByAltText('category')).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute(
      'href',
      `/catalog/${categoryData.parentName}/${categoryData.name}`
    );
    expect(getByText('category')).toBeInTheDocument();
  });
});
