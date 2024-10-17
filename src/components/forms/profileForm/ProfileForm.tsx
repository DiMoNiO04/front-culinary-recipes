'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui';
import { EmailIcon, UserIcon } from '@/components/icons';
import { EInputType } from '@/utils';
import styles from './ProfileForm.module.scss';
import schemaProfile from './schema';

export interface IProfileInputs {
  fullName: string;
  email: string;
}

const ProfileForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IProfileInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaProfile),
  });

  return (
    <form className={styles.form}>
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
        icon={<EmailIcon />}
        isReadonly={true}
        placeholder="Email"
        register={register}
        name="email"
        errors={errors}
      />
    </form>
  );
};

export default ProfileForm;
