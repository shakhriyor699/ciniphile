

interface IGenres {
  id: number,
  name: string
}

export type ResultsTypes = {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: number[],
  id?: number,
  budget?: number,
  revenue?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: string,
  first_air_date?: string,
  title?: string,
  name?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
  list?: [],
  genres?: IGenres[] | undefined,
  status?: string,
  media_type?: string
}


export type UpComingTypes = {
  dates?: {
    maximum: string
    minimum: string
  },
  page?: number,
  results: ResultsTypes[],
  total_pages?: number,
  total_results?: number
}


export interface IUpComingState {
  loading: boolean
  list: UpComingTypes
  error: string | null
}


export type IMovie = {
  page?: number,
  results: ResultsTypes[],
  total_pages?: number,
  total_results?: number
}



