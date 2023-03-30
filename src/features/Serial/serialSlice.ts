import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResultsTypes } from "../../types/types";


interface IMovieState {
  loading: boolean
  list: ResultsTypes
}

export const loadSerial = createAsyncThunk(
  '@@serial/loadSerial',
  async (serialId: number | undefined) => {
    const res = await axios.get<ResultsTypes>(`https://api.themoviedb.org/3/tv/${serialId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    const { data } = res
    return data
  }
)

const initialState: IMovieState = {
  loading: true,
  list: {}
}

const serialSlice = createSlice({
  name: '@@serial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSerial.pending, (state) => {
        state.loading = true
      })
      .addCase(loadSerial.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(loadSerial.rejected, (state) => {
        state.loading = false
      })
  }
})



export const serialReducer = serialSlice.reducer