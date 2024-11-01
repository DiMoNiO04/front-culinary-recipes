const API_URL = import.meta.env.VITE_API;

export const ApiEndpoints = {
  AUTH: `${API_URL}/auth/login`,
  REGISTRATION: `${API_URL}/auth/registration`,
  DELETE_MY_ACC: `${API_URL}/users/self/delete`,
  CHANGE_PASSWORD: `${API_URL}/users/self/change-password`,
  GET_PERSONAL_DATA: `${API_URL}/users/self/personal-data`,
  UPDATE_PERSONAL_DATA: `${API_URL}/users/self/update-profile`,
  GET_CATEGORIES: `${API_URL}/categories/getAllCategories`,
  GET_CATEGORY: `${API_URL}/categories/getCategory/`,
  GET_CATEGORY_RECIPES: `${API_URL}/recipes/getPublishedRecipesByCategory/`,
  GET_RECIPES: `${API_URL}/recipes/getPublished`,
  SEARCH: `${API_URL}/recipes/search`,
  GET_RECIPE: `${API_URL}/recipes/getOne/`,
} as const;
