'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { EInputType } from '@/utils';
import { EButtonType } from '../button/Button';
import styles from './Input.module.scss';

interface IInputProps {
  type: EInputType;
  placeholder?: string;
  icon?: React.ReactNode;
  isReadonly?: boolean;
  register: any;
  name: string;
  errors?: any;
}

const Input: React.FC<IInputProps> = ({ type, placeholder, icon, register, name, errors, isReadonly = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={styles.input}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>{icon}</div>
        <input
          type={type === EInputType.PASSWORD && showPassword ? EInputType.TEXT : type}
          placeholder={placeholder}
          readOnly={isReadonly}
          autoComplete="off"
          {...register(name)}
          className={styles.field}
        />
        {type === EInputType.PASSWORD && (
          <button type={EButtonType.BUTTON} onClick={togglePasswordVisibility} className={styles.toggleBtn}>
            {showPassword ? (
              <Image src="/icons/passwordHide.svg" alt="Hide" width={24} height={24} />
            ) : (
              <Image src="/icons/passwordShow.svg" alt="Show" width={24} height={24} />
            )}
          </button>
        )}
      </div>
      {errors[name] && <span className={styles.error}>{errors[name].message}</span>}
    </div>
  );
};

export default Input;
