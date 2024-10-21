import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY, TRY_AGAIN, URLS } from '@/utils';
import { ApiEndpoints, EMethods } from '@/api';
import { IErrorResponse } from './interfaces';

const useDeleteAccount = () => {
  const [cookies, , removeCookie] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(ApiEndpoints.DELETE_MY_ACC, {
        method: EMethods.DELETE,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData: IErrorResponse = await response.json();
        setIsError(true);
        setNotificationMsg(errorData.message);
        return;
      }

      const result = await response.json();
      removeCookie(TOKEN_KEY, { path: '/' });
      setNotificationMsg(result.message);
    } catch (error) {
      setIsError(true);
      setNotificationMsg(TRY_AGAIN);
    }
  };

  return { handleDeleteAccount, isError, notificationMsg };
};

export default useDeleteAccount;
