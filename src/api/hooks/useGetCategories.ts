import useSWR from 'swr';
import { fetcher, IApiResponse, IApiResponseReturn, ICategorie, OPTIONS } from '..';
import { ApiEndpoints, EFetchErrors } from '@/utils';

const useGetCategories = (): IApiResponseReturn<ICategorie[]> => {
  const { data, error } = useSWR<IApiResponse<ICategorie[]>>(ApiEndpoints.GET_CATEGORIES, fetcher, OPTIONS);

  if (error) {
    console.error(EFetchErrors.GET_CATEGORIES, error);
  }

  return {
    data: data?.data || null,
    code: data?.code || null,
    message: data?.message || null,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useGetCategories;
