import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Button, EButtonClass, EButtonSize, EButtonType, Notification } from '@/components/ui';
import { useOverflow } from '@/hooks';
import { Auth } from '@/components/modals';
import { SUCCESS_AUTH, TOKEN_KEY } from '@/utils';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const [cookies, , removeCookie] = useCookies([TOKEN_KEY]);
  const [isAuth, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  useOverflow(isModalOpen);

  useEffect(() => {
    const isLoggedIn = !!cookies[TOKEN_KEY];
    setIsAuth(isLoggedIn);

    if (isLoggedIn && hasLoggedIn) {
      setIsOpenNotification(true);
      setHasLoggedIn(true);
    } else {
      setIsOpenNotification(false);
    }
  }, [cookies, hasLoggedIn]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleLogout = () => {
    removeCookie(TOKEN_KEY, { path: '/' });
    setIsAuth(false);
    setIsModalOpen(false);
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
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <div className={styles.userProfile}>
      {isOpenNotification && <Notification isSuccess={true} msg={SUCCESS_AUTH} />}

      {isAuth ? (
        <div className={styles.avatar}>
          <img alt="Profile" src="/img/templates/profile.png" width={32} height={32} />
          {renderProfileLinks()}
        </div>
      ) : (
        <>
          <Button
            text="Login"
            nameClass={EButtonClass.DEF}
            size={EButtonSize.SM}
            typeBtn={EButtonType.BUTTON}
            handle={toggleModal}
            isLink={false}
          />
          <Auth isModalOpen={isModalOpen} onClose={toggleModal} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
