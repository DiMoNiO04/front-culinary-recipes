import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, EButtonClass, EButtonSize, EButtonType, Notification } from '@/components/ui';
import { Auth, ConfirmAction } from '@/components/modals';
import { SUCCESS_AUTH, SUCCESS_LOGOUT, TOKEN_KEY, URLS } from '@/utils';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const [cookies, , removeCookie] = useCookies([TOKEN_KEY]);
  const [isAuth, setIsAuth] = useState(!!cookies[TOKEN_KEY]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (cookies[TOKEN_KEY] && !isAuth) {
      setIsAuth(true);
      setNotification({ isOpen: true, message: SUCCESS_AUTH });
    }
  }, [cookies, isAuth]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleLogoutModal = () => setIsLogoutModalOpen((prev) => !prev);

  const handleLogout = () => {
    removeCookie(TOKEN_KEY, { path: '/' });
    setIsAuth(false);
    setIsModalOpen(false);
    setIsLogoutModalOpen(false);
    setNotification({ isOpen: true, message: SUCCESS_LOGOUT });

    if (location.pathname === URLS.PROFILE || location.pathname === URLS.FAVORITES) {
      navigate(URLS.MAIN, { replace: true });
    }
  };

  const renderProfileLinks = () => (
    <ul className={styles.dropdown}>
      <li>
        <a href={URLS.PROFILE}>Profile</a>
      </li>
      <li>
        <a href={URLS.FAVORITES}>Favorites</a>
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
        onConfirm={handleLogout}
        confirmText="Yes"
        cancelText="Cancel"
      />
    </div>
  );
};

export default UserProfile;
