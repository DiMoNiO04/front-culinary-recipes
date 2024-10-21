const API_URL = import.meta.env.VITE_API;

export const ApiEndpoints = {
  AUTH: `${API_URL}/auth/login`,
  REGISTRATION: `${API_URL}/auth/registration`,
  DELETE_MY_ACC: `${API_URL}/users/self`,
} as const;
