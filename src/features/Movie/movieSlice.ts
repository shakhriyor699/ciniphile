import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ResultsTypes } from "../../types/types";


interface IMovieState {
  list: ResultsTypes
}

export const loadMovie = createAsyncThunk(
  '@@movie/loadMovie',
  async (movieId: number | undefined, { dispatch }) => {
    const res = await axios.get<ResultsTypes>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    const { data } = res
    // console.log(data);
    return data

  }
)


const initialState: IMovieState = {
  list: {}
}


const movieSlice = createSlice({
  name: '@@movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
      addCase(loadMovie.fulfilled, (state, action) => {
        state.list = action.payload
      })
  }
})



export const movieReducer = movieSlice.reducer