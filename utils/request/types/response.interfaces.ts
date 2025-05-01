import { AxiosResponse } from 'axios';

export interface ResponseConfig<T = any, D = any> extends AxiosResponse<T, D> {}
