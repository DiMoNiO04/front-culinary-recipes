import React from 'react';
import styles from './Footer.module.scss';
import { Socials } from '@/components/ui';
import { LogoIcon } from '@/components/icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <LogoIcon className={styles.logo} />
            <p className={styles.topText}>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment
            </p>
          </div>
          <ul className={styles.menu}>
            <li className={styles.menuBlock}>
              <div className={styles.menuBlockTitle}>Tastebite</div>
              <ul className={styles.menuBlockList}>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Feedback</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuBlock}>
              <div className={styles.menuBlockTitle}>Legal</div>
              <ul className={styles.menuBlockList}>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Conditions</Link>
                </li>
                <li>
                  <Link href="#">Cookies</Link>
                </li>
                <li>
                  <Link href="#">Copyright</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuBlock}>
              <div className={styles.menuBlockTitle}>Follow</div>
              <ul className={styles.menuBlockList}>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Youtube</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <p className={styles.year}>© 2024 Tastebite - All rights reserved</p>
          <Socials color={'#7F7F7F'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
