'use client';

import React from 'react';
import Link from 'next/link';
import { LogoIcon, SearchIcon } from '@/components/icons';
import { BurgerBtn, MenuHeader, UserProfile } from '@/components/elements';
import { EButtonType, Socials } from '@/components/ui';
import { useHeader } from '@/hooks';
import styles from './SecondHeader.module.scss';

const SecondHeader: React.FC = () => {
  const { isScrolled, isOpenBurger, handleBurgerToggle } = useHeader();

  return (
    <header className={`${styles.header} ${isOpenBurger && styles.open} ${isScrolled && styles.scroll}`}>
      <div className="container">
        <div className={styles.container}>
          <Link href={'/'} className={styles.logo}>
            <LogoIcon />
          </Link>
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              <MenuHeader />
              <div className={styles.socials}>
                <Socials />
              </div>
            </div>
          </div>
          <div className={styles.panel}>
            <button type={EButtonType.BUTTON} className={styles.searchBtn}>
              <SearchIcon />
            </button>
            <UserProfile />
            <BurgerBtn isOpen={isOpenBurger} onClick={handleBurgerToggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondHeader;
