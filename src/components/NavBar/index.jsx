import React from 'react';
import classes from './NavBar.module.scss';
import { MenuItems } from '../MenuItems';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutLineClose } from 'react-icons/ai';

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div className="class header__content">
        <h2>Food Corner</h2>
      </div>
      <nav className={classes.header__content__nav}>
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
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight/>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
