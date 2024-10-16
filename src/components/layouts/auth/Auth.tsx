'use client';

import React from 'react';
import { CloseIcon, EmailIcon, PasswordIcon, UserIcon } from '@/components/icons';
import { Button, EButtonClass, EButtonSize, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/utils';
import styles from './Auth.module.scss';

interface IAuth {
  onClose: () => void;
  isModalOpen: boolean;
}

const Auth: React.FC<IAuth> = ({ onClose, isModalOpen }) => {
  const [isLogin, setIsLogin] = React.useState(true);

  const toggleAuthMode = () => setIsLogin((prevState) => !prevState);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`} onClick={handleOverlayClick}>
      <div className={styles.modalInner}>
        <button type={EButtonType.BUTTON} className={styles.closeBtn} onClick={onClose}>
          <CloseIcon />
        </button>

        <h2 className={styles.title}>{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>

        <form className={styles.form}>
          {!isLogin && <Input type={EInputType.TEXT} placeholder="Full Name" icon={<UserIcon />} />}

          <Input type={EInputType.EMAIL} placeholder="Email" icon={<EmailIcon />} />
          <Input type={EInputType.PASSWORD} placeholder="Password" icon={<PasswordIcon />} />

          {!isLogin && <Input type={EInputType.PASSWORD} placeholder="Confirm Password" icon={<PasswordIcon />} />}

          <div className={styles.btn}>
            <Button
              text={isLogin ? 'Login' : 'Sign Up'}
              nameClass={EButtonClass.SEC}
              typeBtn={EButtonType.SUBMIT}
              size={EButtonSize.LG}
              isLink={false}
            />
          </div>
        </form>

        <div className={styles.analog}>
          {isLogin ? (
            <>
              Don’t have an account?
              <button type={EButtonType.BUTTON} onClick={toggleAuthMode}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button type={EButtonType.BUTTON} onClick={toggleAuthMode}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
