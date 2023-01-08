// import { createRef, useEffect } from 'react';
import css from './Menu.module.css';
import clsx from 'clsx';

const Menu = ({ show, setFilter }) => {
  const clickFilter = ({ target }) => {
    if (target.tagName !== 'LI') return;

    setFilter(target.textContent.toLowerCase())
  };

  return (
    <div className={clsx(css.wrapper, show && css.isNavOpen)}>
      <div className={css.nav}>
        <ul className={css.navBody} onClick={clickFilter}>
          <li className={css.navItem}>Все</li>
          <li className={css.navItem}>Сегодня</li>
          <li className={css.navItem}>Просроченные</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
