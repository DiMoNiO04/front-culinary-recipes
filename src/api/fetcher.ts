/* eslint-disable @typescript-eslint/no-explicit-any */
import { EFetchErrors, EStatusCode } from '../utils';

export const fetcher = async <T>(url: string, mockData?: T): Promise<T | null> => {
  try {
    const response = await fetch(url, { cache: 'force-cache', credentials: 'include' });

    if (!response.ok) {
      const error = new Error(`${EFetchErrors.ERROR_HTTP}${response.status}`);
      (error as any).status = response.status;

      if (response.status === EStatusCode.NO_AUTH) {
        return Promise.reject({ status: EStatusCode.NO_AUTH });
      }

      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error(EFetchErrors.ERROR_FETCH, error);
    throw error;
  }
};
