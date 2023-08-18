import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { items } from './items.js';
import s from './headerMenu.module.css';
import { scroller } from 'react-scroll';


const getLinkClassName = ({ isActive }) => {
  return isActive ? `${s.linkActive}` : `${s.link}`;
};

const HeaderMenu = () => {
  const location = useLocation();
 
  const onScroll = name => {
    scroller.scrollTo(name, {
      duration: 500,
      delay: 100,
      smooth: true,
    });
  };
  const element = items.map(({ id, to, text, type, anchor }) => (
    <li className={s.navItem} key={id}>
      {type === 'button' ? (
        <>
          {location.pathname === '/' && (
            <button className={s.linkBtn} onClick={() => onScroll(anchor)}>
              {text}
            </button>
          )}
        </>
      ) : (
        <NavLink className={getLinkClassName} to={to}>
          {text}
        </NavLink>
      )}
    </li>
  ));

  return <ul className={s.navbarNav}>{element}</ul>;
};

export default HeaderMenu;
