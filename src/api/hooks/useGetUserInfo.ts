import useSWR from 'swr';
import { IApiResponse, IApiResponseReturn, IUser, OPTIONS, fetcher } from '..';
import { ApiEndpoints, EFetchErrors } from '@/utils';

const useGetUserInfo = (): IApiResponseReturn<IUser> => {
  const { data, error } = useSWR<IApiResponse<IUser>>(ApiEndpoints.GET_PERSONAL_DATA, fetcher, {
    ...OPTIONS,
    refreshInterval: 50000,
    revalidateOnMount: true,
    dedupingInterval: 1000,
  });

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
