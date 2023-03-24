import axios, { AxiosInstance, AxiosResponse, Method } from "axios";

export interface ApiCallProps {
    instance: AxiosInstance;
    endpoint: string;
    body?: any;
    method?: Method;
    params?: any;
}

export default async function apiRequest<T>({
    instance,
    endpoint,
    body,
    method,
    params,
}: ApiCallProps) {
    const apiMethod: Method = method ?? 'GET'; //Default it to GET

    const response: AxiosResponse = await instance({
        url: endpoint,
        method: apiMethod,
        data: body,
        params,
    });

    if (response.data) {
        return response;
    }
    return Promise.reject(response.statusText);
}

export async function apiDefaultResponse<T>({
    instance,
    endpoint,
    body,
    method,
    params,
}: ApiCallProps) {
    const apiMethod: Method = method ?? 'GET'; //Default it to GET

    const response: AxiosResponse = await instance({
        url: endpoint,
        method: apiMethod,
        data: body,
        params,
    });

    if (response.data && response.status === 200) {
        return response;
    }

    return Promise.reject(response.statusText);
}

export function setupAxiosInstance(baseURL: string) {
    const instance = axios.create({
        baseURL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Cache-Control': 'no-cache, no-store',
        }
    });

    instance.interceptors.request.use(
        (config) => {
            const token = sessionStorage.getItem('AuthToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return instance;
}
