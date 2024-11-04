import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiEndpoints, EMethods, TOKEN_KEY, TOKEN_NOT_FOUND, TRY_AGAIN } from '@/utils';
import apiRequest from '../apiRequest';
import { mutate } from 'swr';

const useDeleteRecipe = (id: number) => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  const handleDeleteRecipe = async () => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];

      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      const result = await apiRequest(`${ApiEndpoints.DELETE_RECIPE}/${id}`, EMethods.DELETE, undefined, token);
      setNotificationMsg(result.message);
      mutate([ApiEndpoints.GET_MY_RECIPES, token]);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setNotificationMsg(TRY_AGAIN);
    }
  };

  return { handleDeleteRecipe, isError, notificationMsg };
};

export default useDeleteRecipe;
