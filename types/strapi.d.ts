declare type StrapiPagination = {
  pagination: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
  }
}

declare type StrapiResponse<T> = {
  data: T,
  meta: {
    pagination: StrapiPagination
  }
}

declare type StrapiEntity<T> = {
  id: number,
  attributes: T & {
    createdAt: string
    publishedAt: string
    updatedAt: string
  }
}

declare type StrapiComponent<T> = {id:number} & T
declare type Populated<T> = { data: T }
declare type PopulatedEntity<T> = Populated<StrapiEntity<T>>
declare type BatchPopulatedEntity<T> = Populated<StrapiEntity<T>[]>

declare type StrapiImage = {
  url: string
  width: number
  height: number
  hash: string
  // more properties
}
