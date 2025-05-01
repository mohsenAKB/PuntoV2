import { RequestInstance } from './types/request-instance.interface';
import InstanceNames from './types/request-instances.enum';

export class RequestInstanceUtility {
  private static _instance: RequestInstanceUtility;
  private _requestInstances: RequestInstance[] = [];
  public defaultInstanceName: InstanceNames = InstanceNames.Default;

  private constructor() { }

  public static getInstance(): RequestInstanceUtility {
    if (!RequestInstanceUtility._instance) {
      RequestInstanceUtility._instance = new RequestInstanceUtility();
    }

    return RequestInstanceUtility._instance;
  }

  addInstance(instance: RequestInstance): void {
    this._requestInstances.push(instance);
  }

  removeInstanceByName(instanceName: InstanceNames): void {
    this._requestInstances = this._requestInstances.filter(
      (instance) => instance.name === instanceName,
    );
  }

  getRequestInstance(instanceName?: InstanceNames): RequestInstance {
    if (!instanceName) {
      return this.getRequestInstance(this.defaultInstanceName);
    }

    return this._requestInstances.find((instance) => instance.name == instanceName)!;
  }
}
