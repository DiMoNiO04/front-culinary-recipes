import React, { useEffect } from 'react';
import { Button, Input, Textarea } from '@/components/ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EButtonClass, EButtonSize, EButtonType, EInputType } from '@/utils';
import styles from './CreateRecipeForm.module.scss';
import schemaCreateRecipe from './schema';
import { convertImageToBase64 } from '@/utils/functions';
import { useCreateRecipe } from '@/api/hooks';

export interface ICreateRecipeInputs {
  title: string;
  shortDescription: string;
  cookingTime: number;
  calories: number;
  image: FileList;
  ingredients: string;
  instructions: string;
  categoryId: number;
}

const CreateRecipeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ICreateRecipeInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaCreateRecipe),
  });

  const { createRecipe, notificationMsg, isError } = useCreateRecipe();

  useEffect(() => {
    if (notificationMsg) {
      reset();
    }
  }, [notificationMsg, reset]);

  const handleCreateRecipe = async (data: ICreateRecipeInputs) => {
    const imageBase64 = await convertImageToBase64(data.image[0]);
    createRecipe({ ...data });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleCreateRecipe)}>
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
      <Input type={EInputType.FILE} isRequired register={register} name="image" errors={errors} />
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
      />
      <Textarea placeholder="Instructions" isRequired register={register} name="instructions" errors={errors} />
      <Input
        type={EInputType.NUMBER}
        placeholder="Category ID"
        isRequired
        register={register}
        name="categoryId"
        errors={errors}
      />
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
      {isError && <p className={styles.error}>{notificationMsg}</p>}
    </form>
  );
};

export default CreateRecipeForm;
