import React from 'react';
import Wrapper from './Wrapper';

const Layout = ({ title, children }) => {
  document.title = title ? `${title} - FEEM` : `FEEM`;
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
