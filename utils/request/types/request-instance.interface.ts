import { CreateAxiosDefaults } from 'axios';
import { RequestConfig } from './request.interfaces';
import { ResponseConfig } from './response.interfaces';
import InstanceNames from './request-instances.enum';

export interface RequestInstance<T = any, D = any> {
  name: InstanceNames;

  request(config: RequestConfig<D>): Promise<ResponseConfig<T, D>>;
}

export interface CreateInstanceConfig<D = any> extends CreateAxiosDefaults<D> {}
