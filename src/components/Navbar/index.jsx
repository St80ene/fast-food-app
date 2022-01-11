import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { MenuItems } from '../MenuItems';
import './Navbar.scss';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggleHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h4>Food Corner</h4>
      </div>
      <ul className={`navbar__navlinks ${openMenu ? 'isMenuOpen' : ''}`}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} onClick={menuToggleHandler}>
                {item.page}
              </Link>
            </li>
          );
        })}
        {/* <li className="navbar__navlinks__link">
          <a href="#">Home</a>
        </li>
        <li className="navbar__navlinks__link">
          <a href="#">Menu</a>
        </li>
        <li className="navbar__navlinks__link">
          <a href="#">Services</a>
        </li>
        <li className="navbar__navlinks__link">
          <a href="#">Products</a>
        </li>
        <li className="navbar__navlinks__link">
          <a href="#">Contact</a>
        </li> */}
      </ul>
      <div className="navbar__toggle">
        {openMenu ? (
          <AiOutlineClose onClick={menuToggleHandler} />
        ) : (
          <BiMenuAltRight onClick={menuToggleHandler} />
        )}
      </div>
    </nav>
  );
}

export default Nav;
