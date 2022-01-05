import React from 'react';
import NavBar from '../NavBar';

function Layout({children}) {
  return (
    <>
      <NavBar />
      <div className="classes container">{children}</div>
    </>
  );
}

export default Layout;
