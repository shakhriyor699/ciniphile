import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IMovie } from "../../types/types";


interface IMovieState {
  list: IMovie
}


export const loadSerials = createAsyncThunk(
  '@@movies/loadMovie',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios.get<IMovie>(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
    
    const { data } = res
    dispatch(addSerials(data))

    if (!res) {
      rejectWithValue('error')
    }
  }
)

const initialState: IMovieState = {
  list: {results: []}
}


const serialsSlice = createSlice({
  name: '@@serials',
  initialState,
  reducers: {
    addSerials: (state, action: PayloadAction<IMovie>) => {
      state.list = action.payload
    }
  }
})


const { addSerials } = serialsSlice.actions


export const serialsReducer = serialsSlice.reducer