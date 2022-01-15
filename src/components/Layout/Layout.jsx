import React from 'react';
import Nav from '../Navbar';
import classes from './Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={classes.container}>{children}</div>
    </>
  );
}

export default Layout;
