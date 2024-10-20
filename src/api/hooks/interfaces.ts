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
