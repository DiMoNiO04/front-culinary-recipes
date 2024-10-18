'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaLogin from './schema';
import { EmailIcon, PasswordIcon } from '@/components/icons';
import { Button, EButtonClass, EButtonSize, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/utils';
import { useLogin } from '@/api/hooks';
import styles from './LoginForm.module.scss';

interface ILoginForm {
  onSuccess: () => void;
}

export interface ILoginInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<ILoginForm> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const { handleLogin, authError } = useLogin(onSuccess);

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      <Input
        type={EInputType.EMAIL}
        placeholder="Email"
        isRequired={true}
        icon={<EmailIcon />}
        register={register}
        name="email"
        errors={errors}
      />

      <Input
        type={EInputType.PASSWORD}
        placeholder="Password"
        isRequired={true}
        icon={<PasswordIcon />}
        register={register}
        name="password"
        errors={errors}
      />

      {authError && <p className={styles.error}>{authError}</p>}

      <div className={styles.btn}>
        <Button
          text="Login"
          nameClass={EButtonClass.SEC}
          typeBtn={EButtonType.SUBMIT}
          size={EButtonSize.LG}
          isLink={false}
          isDisabled={!isValid}
        />
      </div>
    </form>
  );
};

export default LoginForm;
