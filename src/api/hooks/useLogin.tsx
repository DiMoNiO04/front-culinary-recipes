import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FAIL_FETCH, TOKEN_KEY } from '@/utils';
import { ApiEndpoints, EMethods } from '@/api';
import { ILoginInputs } from '@/components/forms';

const useLogin = (onSuccess: () => void) => {
  const [authError, setAuthError] = useState<string | null>(null);
  const [cookies, setCookie] = useCookies([TOKEN_KEY]);

  const handleLogin = async (data: ILoginInputs) => {
    try {
      const response = await fetch(ApiEndpoints.AUTH, {
        method: EMethods.POST,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setAuthError(errorData.message);
        return;
      }

      const result = await response.json();

      setCookie(TOKEN_KEY, result.token, {
        path: '/',
        maxAge: 24 * 60 * 60,
        secure: true,
        sameSite: 'strict',
      });

      setAuthError(null);
      onSuccess();
    } catch (error) {
      setAuthError(FAIL_FETCH);
    }
  };

  return { handleLogin, authError };
};

export default useLogin;
