'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import { ProfileIcon } from '@/components/icons';
import { useOverflow } from '@/hooks';
import { Auth } from '@/components/modals';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isImageProfile = false;

  const handleLoginClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useOverflow(isModalOpen);

  const renderProfileLinks = () => (
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
  );

  return (
    <div className={styles.userProfile}>
      {isAuth ? (
        <div className={styles.avatar}>
          {isImageProfile ? (
            <Image alt="Profile" src="/img/templates/profile.png" width={32} height={32} />
          ) : (
            <ProfileIcon />
          )}
          {renderProfileLinks()}
        </div>
      ) : (
        <>
          <Button
            text="Login"
            nameClass={EButtonClass.DEF}
            size={EButtonSize.SM}
            typeBtn={EButtonType.BUTTON}
            isLink={false}
            handle={handleLoginClick}
          />
          <Auth onClose={handleCloseModal} isModalOpen={isModalOpen} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
