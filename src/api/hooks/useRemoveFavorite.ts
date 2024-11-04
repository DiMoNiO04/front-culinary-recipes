import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiEndpoints, EMethods, TOKEN_KEY, TOKEN_NOT_FOUND } from '@/utils';
import apiRequest from '../apiRequest';
import { mutate } from 'swr';

const useRemoveFavorite = (id: string) => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);

  const handleRemoveFavorite = async () => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];

      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      await apiRequest(`${ApiEndpoints.DELETE_FAVORITE}/${id}`, EMethods.DELETE, undefined, token);
      mutate([ApiEndpoints.GET_FAVORITES, token]);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return { handleRemoveFavorite, isError };
};

export default useRemoveFavorite;
