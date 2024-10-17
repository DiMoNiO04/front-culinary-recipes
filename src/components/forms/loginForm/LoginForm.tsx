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
  onSubmit: (data: ILoginInputs) => void;
}

interface ILoginInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<ILoginForm> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const handleLogin: SubmitHandler<ILoginInputs> = (data) => onSubmit(data);

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
