'use client';

import React from 'react';
import { LoginForm, SignupForm } from '@/components/forms';
import { Modal } from '..';
import styles from './Auth.module.scss';

interface IAuth {
  onClose: () => void;
  isModalOpen: boolean;
}

const Auth: React.FC<IAuth> = ({ onClose, isModalOpen }) => {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleLogin = (data: any) => console.log('Login Data:', data);
  const handleSignup = (data: any) => console.log('Signup Data:', data);

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} title={isLogin ? 'LOGIN' : 'SIGN UP'}>
      {isLogin ? <LoginForm onSubmit={handleLogin} /> : <SignupForm onSubmit={handleSignup} />}

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
    </Modal>
  );
};

export default Auth;
