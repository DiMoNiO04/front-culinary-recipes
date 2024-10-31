import { useFetchData } from '.';
import { ICategory } from '..';
import { ApiEndpoints } from '@/utils';

export const useGetCategories = () => useFetchData<ICategory[]>(ApiEndpoints.GET_CATEGORIES);
export const useGetCategory = (name: string) => useFetchData<ICategory>(`${ApiEndpoints.GET_CATEGORY}${name}`);
