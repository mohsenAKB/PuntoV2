export interface IList<T = any> {
  success: boolean;
  messages: string[];
  data: T;
}
