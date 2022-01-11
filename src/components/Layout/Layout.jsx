import React from 'react';
import Nav from '../Navbar';
// import NavBar from '../NavBar';
import classes from './Layout.module.scss';
import './random.scss'

function Layout({ children }) {
  return (
    <>
      <Nav />
      {/* <NavBar /> */}
      <div className={classes.container}>{children}</div>
    </>
  );
}

export default Layout;
