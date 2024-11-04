import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiEndpoints, EMethods, TOKEN_KEY, TOKEN_NOT_FOUND, TRY_AGAIN } from '@/utils';
import apiRequest from '../apiRequest';
import { ICreateRecipeInputs } from '@/components/forms/createRecipeForm/CreateRecipeForm';

const useCreateRecipe = () => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  const createRecipe = async (recipeData: ICreateRecipeInputs) => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];
      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      const result = await apiRequest(ApiEndpoints.CREATE_RECIPE, EMethods.POST, recipeData, token);
      setNotificationMsg(result.message);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setNotificationMsg(TRY_AGAIN);
    }
  };

  return { createRecipe, isError, notificationMsg };
};

export default useCreateRecipe;
