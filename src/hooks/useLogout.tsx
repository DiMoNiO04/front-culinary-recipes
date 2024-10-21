import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { SUCCESS_LOGOUT, TOKEN_KEY, URLS } from '@/utils';

const useLogout = () => {
  const [cookies, , removeCookie] = useCookies([TOKEN_KEY]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    removeCookie(TOKEN_KEY, { path: '/' });

    if (location.pathname === URLS.PROFILE || location.pathname === URLS.FAVORITES) {
      navigate(URLS.MAIN, { replace: true });
    }

    return SUCCESS_LOGOUT;
  };

  return { isAuth: !!cookies[TOKEN_KEY], handleLogout };
};

export default useLogout;
