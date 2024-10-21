import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { TOKEN_KEY, URLS } from '@/utils';

const ProtectedUser: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const [cookies] = useCookies([TOKEN_KEY]);

  if (!cookies[TOKEN_KEY]) {
    return <Navigate to={URLS.MAIN} />;
  }

  return element;
};

export default ProtectedUser;
