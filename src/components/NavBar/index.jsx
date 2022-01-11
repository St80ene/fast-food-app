import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.scss';
import { MenuItems } from '../MenuItems';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory()
  const [menuOpen, setMenuOpen] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((page) => !page);
  };


  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to={'/'} className={classes.header__content__logo}>
          Food Corner
        </Link>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ''
          }`}
        >
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} onClick={menuToggleHandler}>
                    {item.page}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <button>CTA Page</button> */}
        </nav>
        <div className={classes.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
