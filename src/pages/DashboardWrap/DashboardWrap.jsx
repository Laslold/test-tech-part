import React from 'react';
import s from './dashPage.module.css';
import Header from 'components/Header/Header';

import { Outlet } from 'react-router-dom';
const DashboardPage = () => {
  return (
    <>
      <header className={`${s.heroWrap} ${s.ftcoBg}`}>
        <div className={s.overlay}></div>
        <div className={s.container}>
          <Header />
          <div className={s.row}></div>
        </div>
      </header>
      <main className={s.wrapper}>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardPage;
