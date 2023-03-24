import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IMovie } from "../../types/types";


interface IMovieState {
  list: IMovie
}


export const loadTopMovies = createAsyncThunk(
  '@@topMovies/loadTopMovies',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios.get<IMovie>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
    const { data } = res

    
    
    dispatch(addTopMovies(data))

    if (!res) {
      rejectWithValue('error')
    }
  }
)

const initialState: IMovieState = {
  list: { results: [] }
}


const topMovieSlice = createSlice({
  name: '@@topMovies',
  initialState,
  reducers: {
    addTopMovies: (state, action: PayloadAction<IMovie>) => {
      state.list = action.payload
    }
  }
})


const { addTopMovies } = topMovieSlice.actions

export const topMovieReducer = topMovieSlice.reducer