import React from 'react';
import LayoutProps from '../interfaces/layout/layout-props';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="wrapper">{children}</div>
);

export default Layout;
