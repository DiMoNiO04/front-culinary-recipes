export interface IAuthResponse {
  token: string;
  message: string;
}

export interface IErrorResponse {
  message: string;
}

export interface IAuthCallbacks {
  onSuccess?: () => void;
}

export interface IApiResponseReturn<T> {
  code?: number | null;
  message: string | null;
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

export interface IApiResponse<T> {
  code: number;
  message: string;
  time: string;
  data: T;
}

interface IUserRoles {
  id: number;
  roleId: number;
  userId: number;
}

interface IRole {
  id: number;
  value: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  UserRoles: IUserRoles;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  banned: boolean;
  banReasong: string | null;
  createdAt: string;
  updatedAt: string;
  roles: IRole[];
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  image: string;
  countrecipes: number;
  recipes?: IRecipe[];
}

export interface IRecipe {
  id: number;
  title: string;
  shortDescription: string;
  cookingTime: number;
  calories: number;
  image: string;
  createdAt: string;
  author?: IAuthorRecipe;
}

export interface IAuthorRecipe {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const OPTIONS = {
  revalidateOnFocus: false,
  refreshInterval: 500000,
  dedupingInterval: 500000,
};
