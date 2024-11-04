import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiEndpoints, EMethods, TOKEN_KEY, TOKEN_NOT_FOUND } from '@/utils';
import apiRequest from '../apiRequest';
import { mutate } from 'swr';

type FavoriteAction = 'add' | 'remove';

const useFavorite = (id: string) => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);

  const handleFavorite = async (action: FavoriteAction) => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];
      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      const endpoint =
        action === 'add' ? `${ApiEndpoints.ADD_FAVORITE}/${id}` : `${ApiEndpoints.DELETE_FAVORITE}/${id}`;
      const method = action === 'add' ? EMethods.POST : EMethods.DELETE;

      await apiRequest(endpoint, method, undefined, token);
      mutate([ApiEndpoints.GET_FAVORITES, token]);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return { handleFavorite, isError };
};

export default useFavorite;
