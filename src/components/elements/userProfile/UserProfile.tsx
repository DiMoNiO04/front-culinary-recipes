'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import { Button, EButtonClass, EButtonSize, EButtonType, Notification } from '@/components/ui';
import { ProfileIcon } from '@/components/icons';
import { useOverflow } from '@/hooks';
import { Auth } from '@/components/modals';
import { SUCCESS_AUTH, TOKEN_KEY } from '@/utils';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isAuth, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ isSuccess: boolean; msg: string } | null>(null);
  const isImageProfile = false;

  useEffect(() => {
    setIsAuth(!!cookies[TOKEN_KEY]);
  }, [cookies]);

  useOverflow(isModalOpen);

  const handleLoginClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAuthSuccess = () => {
    setIsAuth(true);
    setIsModalOpen(false);
    setNotification({ isSuccess: true, msg: SUCCESS_AUTH });
  };

  const handleAuthError = (errorMessage: string) => {
    setNotification({ isSuccess: false, msg: errorMessage });
  };

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
      {notification && <Notification isSuccess={notification.isSuccess} msg={notification.msg} />}
      {isAuth ? (
        <div className={styles.avatar}>
          {isImageProfile ? <Image alt="" src="/img/templates/profile.png" width={32} height={32} /> : <ProfileIcon />}
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
          <Auth
            onClose={handleCloseModal}
            isModalOpen={isModalOpen}
            onAuthSuccess={handleAuthSuccess}
            onAuthError={handleAuthError}
          />
        </>
      )}
    </div>
  );
};

export default UserProfile;
