import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiEndpoints, EMethods, TOKEN_KEY, TOKEN_NOT_FOUND } from '@/utils';
import apiRequest from '../apiRequest';
import { mutate } from 'swr';

const useAddFavorite = (id: string) => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);

  const handleAddFavorite = async () => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];

      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      await apiRequest(`${ApiEndpoints.ADD_FAVORITE}/${id}`, EMethods.POST, undefined, token);
      mutate([ApiEndpoints.GET_FAVORITES, token]);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return { handleAddFavorite, isError };
};

export default useAddFavorite;
