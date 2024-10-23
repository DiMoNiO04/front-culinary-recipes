import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Button, Notification } from '@/components/ui';
import { Auth, ConfirmAction } from '@/components/modals';
import { SUCCESS_AUTH, TOKEN_KEY, EUrls, EButtonClass, EButtonSize, EButtonType } from '@/utils';
import { useLogout } from '@/hooks';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: '',
  });

  const { isAuth, handleLogout } = useLogout();

  useEffect(() => {
    if (cookies[TOKEN_KEY] && !isAuth) {
      setNotification({ isOpen: true, message: SUCCESS_AUTH });
    }
  }, [cookies, isAuth]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleLogoutModal = () => setIsLogoutModalOpen((prev) => !prev);

  const handleLogOut = () => {
    const message = handleLogout();
    setNotification({ isOpen: true, message });
    setIsLogoutModalOpen(false);
    setIsModalOpen(false);
  };

  const renderProfileLinks = () => (
    <ul className={styles.dropdown}>
      <li>
        <a href={EUrls.PROFILE}>Profile</a>
      </li>
      <li>
        <a href={EUrls.FAVORITES}>Favorites</a>
      </li>
      <li>
        <a href={'#'}>Recipes</a>
      </li>
      <li>
        <button type="button" onClick={toggleLogoutModal}>
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <div className={styles.userProfile}>
      {notification.isOpen && <Notification isSuccess={true} msg={notification.message} />}

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

      <ConfirmAction
        title="Are you sure you want to log out of your account?"
        isModalOpen={isLogoutModalOpen}
        onClose={toggleLogoutModal}
        onConfirm={handleLogOut}
        confirmText="Yes"
        cancelText="Cancel"
      />
    </div>
  );
};

export default UserProfile;
