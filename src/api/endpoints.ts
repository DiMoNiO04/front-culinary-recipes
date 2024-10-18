const API_URL = process.env.NEXT_PUBLIC_API;

export const ApiEndpoints = {
  AUTH: `${API_URL}/auth/login`,
} as const;
