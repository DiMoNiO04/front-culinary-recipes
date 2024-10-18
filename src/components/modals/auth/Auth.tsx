'use client';

import React from 'react';
import { LoginForm, SignupForm } from '@/components/forms';
import { IModalProps, Modal } from '..';
import styles from './Auth.module.scss';

interface IAuthProps extends IModalProps {
  onAuthSuccess: () => void;
}

const Auth: React.FC<IAuthProps> = ({ onClose, isModalOpen, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleAuthSuccess = () => {
    onAuthSuccess();
    onClose();
  };

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} title={isLogin ? 'LOGIN' : 'SIGN UP'}>
      {isLogin ? <LoginForm onSuccess={handleAuthSuccess} /> : <SignupForm onSuccess={handleAuthSuccess} />}

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
