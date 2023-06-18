import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IMovie } from "../../types/types";
import { RootState } from "../../store";


interface IMovieState {
  list: IMovie
}


export const loadMovies = createAsyncThunk(
  '@@movies/loadMovie',
  async (count: number | undefined = 1, { dispatch, rejectWithValue }) => {
    const res = await axios.get<IMovie>(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=${count}`)
    const { data } = res
    dispatch(addMovies(data))

    if (!res) {
      rejectWithValue('error')
    }
  }
)

const initialState: IMovieState = {
  list: { results: [] }
}


const moviesSlice = createSlice({
  name: '@@movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.list = action.payload
    }
  }
})


const { addMovies } = moviesSlice.actions


export const moviesReducer = moviesSlice.reducer
export const selectMovies = (state: RootState) => state.movies.list.results