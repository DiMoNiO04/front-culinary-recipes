import { useFetchData } from '.';
import { ICategory, IRecipe } from '..';
import { ApiEndpoints } from '@/utils';

export const useGetCategories = () => useFetchData<ICategory[]>(ApiEndpoints.GET_CATEGORIES);
export const useGetCategory = (name: string) => useFetchData<ICategory>(`${ApiEndpoints.GET_CATEGORY}${name}`);
export const useGetCategoryRecipes = (name: string) =>
  useFetchData<IRecipe[]>(`${ApiEndpoints.GET_CATEGORY_RECIPES}${name}`);
export const useGetRecipes = () => useFetchData<IRecipe[]>(`${ApiEndpoints.GET_RECIPES}`);
