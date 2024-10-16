'use client';

import React, { useState } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image';
import { EButtonType } from '../button/Button';
import { EInputType } from '@/utils';

interface IInput {
  type: string;
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({ type, placeholder, icon, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.inputWrapper}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input
        type={type === EInputType.PASSWORD && showPassword ? EInputType.TEXT : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputField}
      />
      {type === EInputType.PASSWORD && (
        <button type={EButtonType.BUTTON} className={styles.toggleButton} onClick={togglePasswordVisibility}>
          {showPassword ? (
            <Image src="/icons/passwordHide.svg" alt="Hide" width={24} height={24} />
          ) : (
            <Image src="/icons/passwordShow.svg" alt="Show" width={24} height={24} />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
