import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IMovie } from "../../types/types";


interface IMovieState {
  list: IMovie
}


export const loadMovies = createAsyncThunk(
  '@@movies/loadMovie',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios.get<IMovie>(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
    const { data } = res
    dispatch(addMovies(data))

    if (!res) {
      rejectWithValue('error')
    }
  }
)

const initialState: IMovieState = {
  list: {results: []}
}


const movieSlice = createSlice({
  name: '@@movies',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMovie>) => {
      state.list = action.payload
    }
  }
})


const { addMovies } = movieSlice.actions


export const movieReducer = movieSlice.reducer