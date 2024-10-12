'use client';

import React, { useState } from 'react';
import { EButtonType, Socials } from '@/components/ui';
import { LogoIcon, SearchIcon } from '@/components/icons';
import { MenuHeader, UserProfile } from '@/components/elements';
import styles from './MainHeader.module.scss';

const MainHeader: React.FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const handleBurgerToggle = () => setIsOpenBurger(!isOpenBurger);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.topContainer}>
              <div className={styles.topLogo}>
                <LogoIcon />
              </div>
              <div className={styles.socials}>
                <Socials />
              </div>
              <div className={styles.topRight}>
                <button type={EButtonType.BUTTON} className={styles.searchBtn}>
                  <SearchIcon />
                </button>
                <UserProfile />
                <div className={`${styles.burger} ${isOpenBurger ? styles.open : ''}`} onClick={handleBurgerToggle}>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.bottom} ${isOpenBurger && styles.open}`}>
          <div className={`container ${styles.bottomCont}`}>
            <div className={styles.bottomContainer}>
              <div className={styles.bottomLogo}>
                <LogoIcon />
              </div>
              <MenuHeader />
              <div className={styles.bottomSocials}>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
