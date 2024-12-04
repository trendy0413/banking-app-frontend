import api from './axios';
import { AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export const apiRequest = async <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: any,
  config = {}
): Promise<ApiResponse<T>> => {
  try {
    let response: AxiosResponse;

    switch (method) {
      case 'get':
        response = await api.get(url, config);
        break;
      case 'post':
        response = await api.post(url, data, config);
        break;
      case 'put':
        response = await api.put(url, data, config);
        break;
      case 'delete':
        response = await api.delete(url, config);
        break;
      default:
        throw new Error(`Unsupported method ${method}`);
    }

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError<any>;
    return {
      error: axiosError.response?.data?.error || 'An error occurred',
      status: axiosError.response?.status || 500,
    };
  }
};

// Utility functions for common requests
export const get = async <T>(url: string, config = {}) => 
  apiRequest<T>('get', url, undefined, config);

export const post = async <T>(url: string, data: any, config = {}) => 
  apiRequest<T>('post', url, data, config);

export const put = async <T>(url: string, data: any, config = {}) => 
  apiRequest<T>('put', url, data, config);

export const del = async <T>(url: string, config = {}) => 
  apiRequest<T>('delete', url, undefined, config);