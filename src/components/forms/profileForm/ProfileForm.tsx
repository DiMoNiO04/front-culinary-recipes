import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui';
import { EmailIcon, PhoneIcon, UserIcon } from '@/components/icons';
import { EInputType } from '@/utils';
import styles from './ProfileForm.module.scss';
import schemaProfile from './schema';

export interface IProfileInputs {
  firstName: string;
  lastName: string;
  surname?: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  dateOfBirth?: Date | null;
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
        type={EInputType.TEXT}
        placeholder="Surname"
        icon={<UserIcon />}
        register={register}
        name="surname"
        errors={errors}
      />

      <Input
        type={EInputType.EMAIL}
        icon={<EmailIcon />}
        isReadonly={true}
        isRequired={true}
        placeholder="Email"
        register={register}
        name="email"
        errors={errors}
      />

      <Input
        type={EInputType.TEXT}
        icon={<PhoneIcon />}
        placeholder="Phone"
        register={register}
        name="phone"
        errors={errors}
      />

      <Input
        type={EInputType.TEXT}
        icon={<UserIcon />}
        placeholder="Country"
        register={register}
        name="country"
        errors={errors}
      />

      <Input
        type={EInputType.TEXT}
        icon={<UserIcon />}
        placeholder="City"
        register={register}
        name="city"
        errors={errors}
      />

      <Input
        type={EInputType.DATE}
        icon={<UserIcon />}
        placeholder="Date of Birth"
        register={register}
        name="dateOfBirth"
        errors={errors}
      />
    </form>
  );
};

export default ProfileForm;
