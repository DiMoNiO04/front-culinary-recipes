import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowDownIcon } from '@/components/icons';
import styles from './MenuHeader.module.scss';

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
        {[...Array(3)].map((_, index) => (
          <li key={index} className={`${styles.menuItem} ${isMenuOpen(index) ? styles.open : ''}`}>
            <Link href="#" onClick={() => toggleMenu(index)}>
              Menu Item {index + 1} <ArrowDownIcon className={styles.icon} />
            </Link>
            <ul className={`${styles.dropdown} ${isMenuOpen(index) ? styles.dropdownOpen : ''}`}>
              <li>
                <Link href="#">Submenu 1</Link>
              </li>
              <li>
                <Link href="#">Submenu 2</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
