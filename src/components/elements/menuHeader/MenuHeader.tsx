import React from 'react';
import Link from 'next/link';
import { ArrowDownIcon } from '@/components/icons';
import styles from './MenuHeader.module.scss';

const MenuHeader: React.FC = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="#">
            Homepage <ArrowDownIcon className={styles.icon} />
          </Link>
          <ul className={styles.dropdown}>
            <li>
              <Link href="#">Submenu 1</Link>
            </li>
            <li>
              <Link href="#">Submenu 2</Link>
            </li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="#">
            Recipe Page <ArrowDownIcon className={styles.icon} />
          </Link>
          <ul className={styles.dropdown}>
            <li>
              <Link href="#">Submenu 1</Link>
            </li>
            <li>
              <Link href="#">Submenu 2</Link>
            </li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="#">
            Pages <ArrowDownIcon className={styles.icon} />
          </Link>
          <ul className={styles.dropdown}>
            <li>
              <Link href="#">Submenu 1</Link>
            </li>
            <li>
              <Link href="#">Submenu 2</Link>
            </li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="#">Buy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuHeader;
