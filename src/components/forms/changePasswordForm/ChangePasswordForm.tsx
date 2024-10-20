import React from 'react';
import { PasswordIcon } from '@/components/icons';
import { Button, EButtonClass, EButtonSize, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/utils';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaChangePassword } from './schema';

interface IChangePasswordInputs {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface IChangePasswordFormProps {
  onSubmit: SubmitHandler<IChangePasswordInputs>;
}

const ChangePasswordForm: React.FC<IChangePasswordFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IChangePasswordInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaChangePassword),
  });

  const handleChangePassword: SubmitHandler<IChangePasswordInputs> = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(handleChangePassword)}>
      <Input
        type={EInputType.PASSWORD}
        placeholder="Current Password"
        isRequired={true}
        icon={<PasswordIcon />}
        register={register}
        name="currentPassword"
        errors={errors}
      />

      <Input
        type={EInputType.PASSWORD}
        placeholder="New Password"
        isRequired={true}
        icon={<PasswordIcon />}
        register={register}
        name="newPassword"
        errors={errors}
      />

      <Input
        type={EInputType.PASSWORD}
        placeholder="Confirm New Password"
        isRequired={true}
        icon={<PasswordIcon />}
        register={register}
        name="confirmPassword"
        errors={errors}
      />

      <div className="flexCenter">
        <Button
          text="Save"
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

export default ChangePasswordForm;
