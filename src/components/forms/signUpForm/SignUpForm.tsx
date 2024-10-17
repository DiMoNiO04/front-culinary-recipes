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
  onSubmit: (data: ISignupInputs) => void;
}

interface ISignupInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC<ISignupForm> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignupInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaSignUp),
  });

  const handleSignup: SubmitHandler<ISignupInputs> = (data) => onSubmit(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSignup)}>
      <Input
        type={EInputType.TEXT}
        placeholder="First Name"
        icon={<UserIcon />}
        isRequired={true}
        register={register}
        name="firstName"
        errors={errors}
      />

      <Input
        type={EInputType.TEXT}
        placeholder="Last Name"
        icon={<UserIcon />}
        isRequired={true}
        register={register}
        name="lastName"
        errors={errors}
      />

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

      <Input
        type={EInputType.PASSWORD}
        placeholder="Confirm Password"
        isRequired={true}
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
          isDisabled={!isValid}
        />
      </div>
    </form>
  );
};

export default SignupForm;
