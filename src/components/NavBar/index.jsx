import React, { useState } from 'react';
import classes from './NavBar.module.scss';
import { MenuItems } from '../MenuItems';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutLineClose } from 'react-icons/ai';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Food Corner</h2>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ''
          }`}
        >
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
