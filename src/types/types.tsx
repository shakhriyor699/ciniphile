
export type UpComingTypes = {
  dates: {
    maximum: string
    minimum: string
  },
  page: number,
  results: [],
  total_pages: number,
  total_results: number
}


export interface IUpComingState {
  loading: boolean,
  list: UpComingTypes | null,
  error: string | null
}
