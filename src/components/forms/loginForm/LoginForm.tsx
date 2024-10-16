'use client';

import React from 'react';
import { EmailIcon, PasswordIcon } from '@/components/icons';
import { Button, EButtonClass, EButtonSize, EButtonType, Input } from '@/components/ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaLogin from './schema';
import styles from './LoginForm.module.scss';
import { EInputType } from '@/utils';

interface ILoginForm {
  onClose: () => void;
  onSubmit: (data: ILoginInput) => void;
}

interface ILoginInput {
  email: string;
  password: string;
}

const LoginForm: React.FC<ILoginForm> = ({ onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const handleLogin: SubmitHandler<ILoginInput> = (data) => onSubmit(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      <Input
        type={EInputType.EMAIL}
        placeholder="Email"
        icon={<EmailIcon />}
        register={register}
        name="email"
        errors={errors}
      />

      <Input
        type={EInputType.PASSWORD}
        placeholder="Password"
        icon={<PasswordIcon />}
        register={register}
        name="password"
        errors={errors}
      />

      <div className={styles.btn}>
        <Button
          text="Login"
          nameClass={EButtonClass.SEC}
          typeBtn={EButtonType.SUBMIT}
          size={EButtonSize.LG}
          isLink={false}
        />
      </div>
    </form>
  );
};

export default LoginForm;
