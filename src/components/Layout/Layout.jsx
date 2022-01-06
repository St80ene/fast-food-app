import React from 'react';
import NavBar from '../NavBar';
import classes from './Layout.module.scss'

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className={classes.container}>{children}</div>
    </>
  );
}

export default Layout;
