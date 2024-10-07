import React from 'react';
import Image from 'next/image';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import { ProfileIcon } from '@/components/icons';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const isAuth: boolean = true;
  const isImageProfile: boolean = true;

  return (
    <div className={styles.userProfile}>
      {isAuth && isImageProfile ? (
        <div className={styles.avatar}>
          <Image alt="Profile" src="/img/templates/profile.png" width={32} height={32} />
          <ul className={styles.dropdown}>
            <li>
              <a href="/profile">My Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      ) : isAuth && !isImageProfile ? (
        <div className={styles.avatar}>
          <ProfileIcon />
          <ul className={styles.dropdown}>
            <li>
              <a href="/profile">My Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <Button
          text="Login"
          nameClass={EButtonClass.DEF}
          size={EButtonSize.SM}
          typeBtn={EButtonType.BUTTON}
          isLink={false}
        />
      )}
    </div>
  );
};

export default UserProfile;
