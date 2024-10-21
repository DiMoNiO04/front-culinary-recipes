import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { TOKEN_KEY, TOKEN_NOT_FOUND, TRY_AGAIN } from '@/utils';
import { ApiEndpoints, EMethods } from '@/api';
import { IErrorResponse } from './interfaces';

const useChangePassword = () => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isError, setIsError] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  const handleChangePassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
    setIsError(false);

    try {
      const token = cookies[TOKEN_KEY];

      if (!token) {
        throw new Error(TOKEN_NOT_FOUND);
      }

      const response = await fetch(ApiEndpoints.CHANGE_PASSWORD, {
        method: EMethods.PATCH,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
      });

      if (!response.ok) {
        const errorData: IErrorResponse = await response.json();
        setIsError(true);
        setNotificationMsg(errorData.message);
        return;
      }

      const result = await response.json();
      setNotificationMsg(result.message);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setNotificationMsg(TRY_AGAIN);
    }
  };

  return { handleChangePassword, isError, notificationMsg };
};

export default useChangePassword;
