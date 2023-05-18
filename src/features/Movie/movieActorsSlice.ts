import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type MovieType = {
  adult: boolean
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

type MovieActorsType = {
  id: number,
  cast: MovieType[],
  crew: MovieType[]
}


export const loadMovieActors = createAsyncThunk<MovieActorsType, number | undefined>(
  '@@movieActors/loadMovieActors',
  async (movieId) => {
    const { data } = await axios.get<MovieActorsType>(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    return data
  }
)

interface IMovieActorsState {
  list: MovieActorsType
}

const initialState: IMovieActorsState = {
  list: {
    id: 0,
    cast: [],
    crew: []
  }
}

const movieActorsSlice = createSlice({
  name: '@@movieActors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovieActors.fulfilled, (state, action) => {
        state.list = action.payload
      })
  }
})

export default movieActorsSlice.reducer