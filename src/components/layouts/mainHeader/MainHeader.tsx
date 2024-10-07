'use client';

import React from 'react';
import styles from './MainHeader.module.scss';
import { Button, EButtonClass, EButtonSize, EButtonType, Socials } from '@/components/ui';
import { SearchIcon } from '@/components/icons';

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.topContainer}>
              <Socials />
              <div className={styles.topRight}>
                <button type={EButtonType.BUTTON} className={styles.searchBtn}>
                  <SearchIcon />
                </button>
                <Button
                  text="Login"
                  nameClass={EButtonClass.DEF}
                  size={EButtonSize.SM}
                  typeBtn={EButtonType.BUTTON}
                  isLink={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className="container">
            <div className={styles.bottomContainer}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
