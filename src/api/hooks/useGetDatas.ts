import { useFetchData, useFetchDataToken } from '.';
import { ICategory, IRecipe, IRole, IUser } from '..';
import { ApiEndpoints } from '@/utils';

export const useGetCategories = () => useFetchData<ICategory[]>(ApiEndpoints.GET_CATEGORIES);
export const useGetCategory = (name: string) => useFetchData<ICategory>(`${ApiEndpoints.GET_CATEGORY}${name}`);
export const useGetCategoryRecipes = (name: string) =>
  useFetchData<IRecipe[]>(`${ApiEndpoints.GET_CATEGORY_RECIPES}${name}`);
export const useGetRecipes = () => useFetchData<IRecipe[]>(`${ApiEndpoints.GET_RECIPES}`);
export const useSearch = (name: string) => useFetchData<IRecipe[]>(`${ApiEndpoints.SEARCH}?title=${name}`);
export const useGetRecipe = (id: number | undefined) => useFetchData<IRecipe>(`${ApiEndpoints.GET_RECIPE}${id}`);

export const useGetFavorites = () => useFetchDataToken<IRecipe[]>(ApiEndpoints.GET_FAVORITES);
export const useGetUserInfo = () => useFetchDataToken<IUser>(ApiEndpoints.GET_PERSONAL_DATA);
export const useGetMyRecipes = () => useFetchDataToken<IRecipe[]>(ApiEndpoints.GET_MY_RECIPES);
export const useGetRole = (value: string) => useFetchDataToken<IRole>(`${ApiEndpoints.GET_ROLE}${value.toUpperCase()}`);
