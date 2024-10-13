'use client';

import React from 'react';
import { EButtonType, Socials } from '@/components/ui';
import { LogoIcon, SearchIcon } from '@/components/icons';
import { MenuHeader, UserProfile, BurgerBtn } from '@/components/elements';
import { useHeader } from '@/hooks';
import styles from './MainHeader.module.scss';

const MainHeader: React.FC = () => {
  const { isScrolled, isOpenBurger, handleBurgerToggle } = useHeader();

  return (
    <header className={`${styles.header} ${isOpenBurger && styles.open} ${isScrolled && styles.scroll}`}>
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
                <BurgerBtn isOpen={isOpenBurger} onClick={handleBurgerToggle} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
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
