import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResultsTypes } from "../../types/types";
import { RootState } from "../../store";


interface IMovieState {
  loading: boolean
  list: ResultsTypes
}

export const loadMovie = createAsyncThunk<ResultsTypes, number | undefined>(
  '@@movie/loadMovie',
  async (movieId) => {
    const res = await axios.get<ResultsTypes>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    const { data } = res
    return data
  }
)


const initialState: IMovieState = {
  loading: false,
  list: {}
}


const movieSlice = createSlice({
  name: '@@movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovie.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(loadMovie.pending, (state) => {
        state.loading = true
      })
      .addCase(loadMovie.rejected, (state) => {
        state.loading = false
      })
  }
})



export const movieReducer = movieSlice.reducer
export const selectLoading = (state: RootState) => state.movie.loading
export const selectFilm = (state: RootState) => state.movie.list