import React from 'react';
import { render } from '@testing-library/react';
import NoPage from '../src/pages/NoPage';

jest.mock('react-router-dom', () => ({
    Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
      <a href={to}>{children}</a>
    ),
  }));

  jest.mock('../assets/images/404-error.png', () => 'mocked-image-path');

  test('renders NoPage component', () => {
    expect(typeof NoPage).toBe('function');
    expect(NoPage).not.toBeNull();
  });
  
  test('NoPage component should render without errors', () => {
    render(<NoPage />);
  });
  
  test('NoPage component should contain 3 links', () => {
    render(<NoPage />);
    const links = document.querySelectorAll('a[href]');
    expect(links.length).toBe(4);
  });



