import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiEndpoints, EMethods, TOKEN_KEY, TOKEN_NOT_FOUND, TRY_AGAIN } from '@/utils';
import { mutate } from 'swr';

const useDeleteAllFavorites = () => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  const executeDelete = async () => {
    setIsError(false);
    setNotificationMsg('');

    try {
      const token = cookies[TOKEN_KEY];

      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      const response = await fetch(ApiEndpoints.DELETE_ALL_FAVORITES, {
        method: EMethods.DELETE,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setNotificationMsg(result.message);
      mutate([ApiEndpoints.GET_FAVORITES, cookies.token]);
    } catch (error) {
      console.error('Failed to delete all favorites:', error);
      setIsError(true);
      setNotificationMsg(TRY_AGAIN);
    }
  };

  return { executeDelete, isError, notificationMsg };
};

export default useDeleteAllFavorites;
