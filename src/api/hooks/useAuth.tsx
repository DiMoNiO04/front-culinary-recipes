import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { TOKEN_KEY, TRY_AGAIN } from '@/utils';
import { ApiEndpoints, EMethods } from '@/api';
import { IAuthCallbacks, IAuthResponse, IErrorResponse } from './interfaces';
import { ILoginInputs } from '@/components/forms';
import { ISignupInputs } from '@/components/forms/signUpForm/SignUpForm';

const useAuth = ({ onSuccess }: IAuthCallbacks) => {
  const [, setCookie] = useCookies([TOKEN_KEY]);
  const [isFail, setIsFail] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  const handleAuth = async (data: ILoginInputs | ISignupInputs, isLogin: boolean) => {
    const endpoint = isLogin ? ApiEndpoints.AUTH : ApiEndpoints.REGISTRATION;

    try {
      setIsFail(false);
      setNotificationMsg('');

      const response = await fetch(endpoint, {
        method: EMethods.POST,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData: IErrorResponse = await response.json();
        setIsFail(true);
        setNotificationMsg(errorData.message);
        return;
      }

      const result: IAuthResponse = await response.json();
      if (isLogin) {
        setCookie(TOKEN_KEY, result.token, {
          path: '/',
          maxAge: 24 * 60 * 60,
          secure: true,
          sameSite: 'strict',
        });
      }

      setIsFail(false);
      setNotificationMsg(result.message);
      if (onSuccess) onSuccess();
    } catch (error) {
      setIsFail(true);
      setNotificationMsg(TRY_AGAIN);
    }
  };

  return { handleAuth, isFail, notificationMsg };
};

export default useAuth;