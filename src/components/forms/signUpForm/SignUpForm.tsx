'use client';

import React from 'react';
import { EmailIcon, PasswordIcon, UserIcon } from '@/components/icons';
import { Button, EButtonClass, EButtonSize, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/utils';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaSignUp from './schema';
import styles from './SignUpForm.module.scss';

interface ISignupForm {
  onClose: () => void;
  onSubmit: (data: ISignupInput) => void;
}

interface ISignupInput {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC<ISignupForm> = ({ onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupInput>({
    mode: 'onChange',
    resolver: yupResolver(schemaSignUp),
  });

  const handleSignup: SubmitHandler<ISignupInput> = (data) => onSubmit(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSignup)}>
      <Input
        type={EInputType.TEXT}
        placeholder="Full Name"
        icon={<UserIcon />}
        register={register}
        name="fullName"
        errors={errors}
      />

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

      <Input
        type={EInputType.PASSWORD}
        placeholder="Confirm Password"
        icon={<PasswordIcon />}
        register={register}
        name="confirmPassword"
        errors={errors}
      />

      <div className={styles.btn}>
        <Button
          text="Sign Up"
          nameClass={EButtonClass.SEC}
          typeBtn={EButtonType.SUBMIT}
          size={EButtonSize.LG}
          isLink={false}
        />
      </div>
    </form>
  );
};

export default SignupForm;
