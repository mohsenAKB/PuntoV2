export interface FilterQueries {
  [key: string]: string | string[]
}

export interface ConvertedFilterQueries {
  [key: string]: number[]
}

export interface ListFilterQueries {
  [key: string]: string | number | string[] | number[] | undefined
}

export const parseFilterQuery = <R = ConvertedFilterQueries, T = FilterQueries,>(filters: T): [string, R] => {
  let query = ''
  let defaultFilters: ConvertedFilterQueries = {}

  for (const filterKey in filters) {
    const filterName = filterKey
    const filterValue = filters[filterName] as string | string[]

    if (filterValue?.length) {
      if (query.length) {
        query += "&"
      }

      defaultFilters[filterName] = []

      if (Array.isArray(filterValue)) {
        for (const value of filterValue) {
          query += `&${filterName}=${value}`
          defaultFilters[filterName].push(+value)
        }
      } else {
        query += `&${filterName}=${filterValue}`
        defaultFilters[filterName].push(+filterValue)
      }

    }
  }

  return [query, defaultFilters as R]
}

export const stringifyFilterQuery = (filters: ListFilterQueries, parentKey: string = "filter"): string => {
  let query = ''

  for (const filterKey in filters) {

    const filterKeyValues = filters[filterKey]
    if (Array.isArray(filterKeyValues)) {
      if (filterKeyValues.length) {

        if (query.length) query += "&"
        query += `${parentKey}[${filterKey}]=${filterKeyValues.join(",")}`
      }
    } else {
      // TODO: should handle string and null values
    }
  }

  return query
}