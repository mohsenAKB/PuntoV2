export interface IPaginationLinks {
  count: number
  current: number
  lastpage: number
  next: number | null
  perpage: number
  previous: number | null

}

export interface IPaginationList<T = any> {
  links: IPaginationLinks
  items: T
  success: boolean
}