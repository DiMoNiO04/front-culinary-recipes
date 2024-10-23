import useSWR from 'swr';
import { IApiResponse, IApiResponseReturn, IUser, OPTIONS, fetcher } from '..';
import { ApiEndpoints, EFetchErrors, TOKEN_KEY } from '@/utils';
import { useCookies } from 'react-cookie';

const tokenFetcher = (url: string, token?: string) => fetcher<IApiResponse<IUser>>(url, token);

const useGetUserInfo = (): IApiResponseReturn<IUser> => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const token = cookies[TOKEN_KEY];

  const { data, error } = useSWR(
    token ? [ApiEndpoints.GET_PERSONAL_DATA, token] : null,
    ([url, token]: [string, string]) => tokenFetcher(url, token),
    {
      ...OPTIONS,
      refreshInterval: 50000,
      revalidateOnMount: true,
      dedupingInterval: 1000,
    }
  );

  if (error) {
    console.error(EFetchErrors.GET_USER_INFO, error);
  }

  return {
    data: data?.data || null,
    code: data?.code || null,
    message: data?.message || null,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useGetUserInfo;
