'use client';

import React from 'react';
import { CloseIcon } from '@/components/icons';
import styles from './Auth.module.scss';
import { LoginForm, SignupForm } from '@/components/forms';

interface IAuth {
  onClose: () => void;
  isModalOpen: boolean;
}

const Auth: React.FC<IAuth> = ({ onClose, isModalOpen }) => {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogin = (data: any) => console.log('Login Data:', data);
  const handleSignup = (data: any) => console.log('Signup Data:', data);

  return (
    <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`} onClick={handleOverlayClick}>
      <div className={styles.modalInner}>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          <CloseIcon />
        </button>

        <h2 className={styles.title}>{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>

        {isLogin ? (
          <LoginForm onClose={() => setIsLogin(false)} onSubmit={handleLogin} />
        ) : (
          <SignupForm onClose={() => setIsLogin(true)} onSubmit={handleSignup} />
        )}

        <div className={styles.analog}>
          {isLogin ? (
            <>
              Don’t have an account?
              <button type="button" onClick={() => setIsLogin(false)}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button type="button" onClick={() => setIsLogin(true)}>
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
