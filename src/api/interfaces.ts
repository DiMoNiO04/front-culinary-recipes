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
  surname: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  city: string | null;
  dateBirth: string | null;
  password: string;
  banned: boolean;
  banReasong: string | null;
  createdAt: string;
  updatedAt: string;
  roles: IRole[];
}

export const OPTIONS = {
  revalidateOnFocus: false,
  refreshInterval: 500000,
  dedupingInterval: 500000,
};
