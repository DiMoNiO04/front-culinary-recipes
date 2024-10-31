import useSWR from 'swr';
import { fetcher, IApiResponse, IApiResponseReturn, ICategory, OPTIONS } from '..';
import { ApiEndpoints, EFetchErrors } from '@/utils';

const useGetCategory = (name: string): IApiResponseReturn<ICategory> => {
  const { data, error } = useSWR<IApiResponse<ICategory>>(`${ApiEndpoints.GET_CATEGORY}${name}`, fetcher, OPTIONS);

  if (error) {
    console.error(EFetchErrors.GET_CATEGORY, error);
  }

  return {
    data: data?.data || null,
    code: data?.code || null,
    message: data?.message || null,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useGetCategory;
