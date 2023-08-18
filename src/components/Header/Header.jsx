import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import s from './header.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <nav className={s.navBar}>
      <div className={s.container}>
        <Link data-aos="fade-left" to="/" className={s.navbarBrand}>
          Car<span>Book</span>
        </Link>
        <div data-aos="fade-right" className={s.collapse}>
          <HeaderMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
