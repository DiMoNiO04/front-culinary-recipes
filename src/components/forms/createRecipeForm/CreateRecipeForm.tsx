import React, { useEffect, useState } from 'react';
import { Button, Input, Textarea, ImageUpload, Notification } from '@/components/ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EButtonClass, EButtonSize, EButtonType, EInputType, EUrls } from '@/utils';
import styles from './CreateRecipeForm.module.scss';
import schemaCreateRecipe from './schema';
import { useCreateRecipe, useGetCategories } from '@/api/hooks';
import { useFileInput } from '@/hooks';
import { useNavigate } from 'react-router-dom';

export interface ICreateRecipeInputs {
  title: string;
  shortDescription: string;
  cookingTime: number;
  calories: number;
  image: string;
  ingredients: string;
  instructions: string;
  categoryId: number;
}

const CreateRecipeForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<ICreateRecipeInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaCreateRecipe),
  });

  const { createRecipe, notificationMsg, isError } = useCreateRecipe();
  const { data: categories } = useGetCategories();

  const { filePreview, handleFileSelect } = useFileInput(setValue, trigger);

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationMsgState, setNotificationMsgState] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (notificationMsg) {
      setNotificationMsgState(notificationMsg);
      setIsNotificationVisible(true);

      if (!isError) {
        setIsSuccess(true);
        const timer = setTimeout(() => {
          navigate(EUrls.PROFILE_RECIPES);
        }, 2000);

        reset();

        return () => clearTimeout(timer);
      } else {
        setIsSuccess(false);
      }
    }
  }, [notificationMsg, reset, navigate, isError]);

  const handleCreateRecipe = async (data: ICreateRecipeInputs) => {
    createRecipe({ ...data, image: filePreview || '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleCreateRecipe)}>
      <p className={styles.requiredNote}>* All fields required</p>

      <Input
        type={EInputType.TEXT}
        placeholder="Recipe Title"
        isRequired
        register={register}
        name="title"
        errors={errors}
      />
      <Input
        type={EInputType.NUMBER}
        placeholder="Cooking Time (minutes)"
        isRequired
        register={register}
        name="cookingTime"
        errors={errors}
      />
      <Input
        type={EInputType.NUMBER}
        placeholder="Calories"
        isRequired
        register={register}
        name="calories"
        errors={errors}
      />
      <Textarea
        placeholder="Short Description"
        isRequired
        register={register}
        name="shortDescription"
        errors={errors}
      />
      <Textarea
        placeholder="Ingredients (separate with semicolon)"
        isRequired
        register={register}
        name="ingredients"
        errors={errors}
        isLabelSemicolon={true}
      />
      <Textarea
        placeholder="Instructions"
        isRequired
        register={register}
        name="instructions"
        errors={errors}
        isLabelSemicolon={true}
      />

      <ImageUpload filePreview={filePreview} onFileSelect={handleFileSelect} />

      <select {...register('categoryId')} defaultValue="">
        <option value="" disabled>
          Select Category
        </option>
        {categories?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <div className={styles.btn}>
        <Button
          text="Create Recipe"
          nameClass={EButtonClass.SEC}
          typeBtn={EButtonType.SUBMIT}
          size={EButtonSize.LG}
          isLink={false}
          isDisabled={!isValid}
        />
      </div>

      {isNotificationVisible && <Notification isSuccess={isSuccess} msg={notificationMsgState} />}
    </form>
  );
};

export default CreateRecipeForm;
