import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ButtonLink from '../src/components/ButtonLink'; 

describe('ButtonLink', () => {
  it('renders the button with correct text', () => {
    const { container } = render(
      <Router>
        <ButtonLink />
      </Router>
    );

    const buttonElement = container.querySelector(
      '.w-full.text-center.rounded.bg-black.p-3.text-white.uppercase.drop-shadow-sm.hover\\:bg-slate-600.cursor-pointer'
    );

    expect(buttonElement).toBeDefined();
    expect(buttonElement?.textContent).toContain('Back to Main page');
  });
});
