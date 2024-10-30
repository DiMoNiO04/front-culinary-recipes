import React, { useState } from 'react';
import { ArrowDownIcon } from '@/components/icons';
import { Link } from 'react-router-dom';
import styles from './MenuHeader.module.scss';
import { EUrls } from '@/utils';

const MenuHeader: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleMenu = (index: number) => {
    setOpenMenus((prevState) =>
      prevState.includes(index) ? prevState.filter((item) => item !== index) : [...prevState, index]
    );
  };

  const isMenuOpen = (index: number) => openMenus.includes(index);

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to={EUrls.ABOUT}>About us</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to={EUrls.CATEGORIES}>Categories</Link>
        </li>

        {/* <li className={`${styles.menuItem} ${isMenuOpen(0) ? styles.open : ''}`}>
          <Link to="#" onClick={() => toggleMenu(0)}>
            Menu Item 1 <ArrowDownIcon className={styles.icon} />
          </Link>
          <ul className={`${styles.dropdown} ${isMenuOpen(0) ? styles.dropdownOpen : ''}`}>
            <li>
              <Link to="#">Submenu 1.1</Link>
            </li>
            <li>
              <Link to="#">Submenu 1.2</Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  );
};

export default MenuHeader;
