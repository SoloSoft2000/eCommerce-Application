import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Layout from '../src/components/Layout';

test('Layout renders content inside wrapper', () => {
  const content = <div>Child Content</div>;

  const { getByText } = render(<Layout>{content}</Layout>);

  const wrapper = getByText('Child Content');
  expect(wrapper).toBeInTheDocument();
  expect(wrapper.parentElement).toHaveClass('wrapper');
});
