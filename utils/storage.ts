import { StorageTypes } from '@/@types/storage-types';

export class Storage {
  static setItem(key: StorageTypes, value: string | number): void {
    localStorage.setItem(key, value.toString());
  }

  static getItem<T extends string>(key: StorageTypes): T | null {
    return localStorage.getItem(key) as T;
  }

  static removeItem(key: StorageTypes): void {
    localStorage.removeItem(key);
  }

  static get isAccessible(): boolean {
    return typeof localStorage === 'object';
  }
}
