'use client';

import React from 'react';
import { EButtonType, Socials } from '@/components/ui';
import { LogoIcon, SearchIcon } from '@/components/icons';
import { MenuHeader, UserProfile } from '@/components/elements';
import styles from './MainHeader.module.scss';

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.topContainer}>
              <Socials color="#000000" />
              <div className={styles.topRight}>
                <button type={EButtonType.BUTTON} className={styles.searchBtn}>
                  <SearchIcon />
                </button>
                <UserProfile />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className="container">
            <div className={styles.bottomContainer}>
              <div className={styles.bottomLogo}>
                <LogoIcon />
              </div>
              <MenuHeader />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
