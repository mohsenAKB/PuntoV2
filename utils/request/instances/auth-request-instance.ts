import axios, { AxiosInstance } from 'axios';
import { CreateInstanceConfig, RequestInstance } from '../types/request-instance.interface';
import { RequestConfig } from '../types/request.interfaces';
import { ResponseConfig } from '../types/response.interfaces';
import InstanceNames from '../types/request-instances.enum';

export class AuthRequestInstance implements RequestInstance {
  name: InstanceNames = InstanceNames.Auth;
  private static _instance: AuthRequestInstance;
  private axiosInstance: AxiosInstance;

  private constructor(configs?: CreateInstanceConfig) {
    this.axiosInstance = axios.create(configs);
  }

  static getInstance<D = any>(configs?: CreateInstanceConfig<D>): AuthRequestInstance {
    if (!AuthRequestInstance._instance) {
      AuthRequestInstance._instance = new AuthRequestInstance(configs);
    }

    return AuthRequestInstance._instance;
  }

  request<T = any, D = any>(config: RequestConfig<D>): Promise<ResponseConfig<T, D>> {
    return this.axiosInstance.request(config);
  }

  get instance() {
    return this.axiosInstance;
  }
}
