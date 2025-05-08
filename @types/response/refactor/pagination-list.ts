export interface IPaginationLinks {
  current_page: number;
  total_items: number;
  per_page: number;
  from: number;
  to: number;
  last_page: number

}

export interface IPaginationList<T = any> {
  pagination: IPaginationLinks
  data: T
  success: boolean
  messages: []
}