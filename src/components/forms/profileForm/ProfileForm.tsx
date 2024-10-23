import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@/components/ui';
import { EmailIcon, UserIcon } from '@/components/icons';
import { EButtonClass, EButtonSize, EButtonType, EInputType } from '@/utils';
import styles from './ProfileForm.module.scss';
import schemaProfile from './schema';
import useGetUserInfo from '@/api/hooks/useGetUserInfo';

export interface IProfileInputs {
  firstName: string;
  lastName: string;
  email: string;
}

const ProfileForm: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaProfile),
  });

  const { data: userData, isLoading, isError } = useGetUserInfo();

  useEffect(() => {
    if (userData) {
      setValue('firstName', userData.firstName || '');
      setValue('lastName', userData.lastName || '');
      setValue('email', userData.email || '');
    }
  }, [userData, setValue]);

  const onSubmit = (data: IProfileInputs) => {
    console.log('Form Data:', data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching user data.</div>;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        icon={<EmailIcon />}
        isReadonly={true}
        isRequired={true}
        placeholder="Email"
        register={register}
        name="email"
        errors={errors}
      />

      <Button
        text="SAVE"
        nameClass={EButtonClass.SEC}
        typeBtn={EButtonType.SUBMIT}
        size={EButtonSize.SM}
        isLink={false}
        handle={handleSubmit(onSubmit)}
        customClass={styles.btnSubmit}
      />
    </form>
  );
};

export default ProfileForm;
