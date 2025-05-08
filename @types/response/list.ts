export interface IList<T = any> {
  data: T
  success: boolean
  messages: string[]
}