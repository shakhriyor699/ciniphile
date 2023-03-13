import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUpComingState, UpComingTypes } from "../../types/types";






export const loadUpComingBanner = createAsyncThunk(
  '@@upcoming/loadBanner',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios.get<UpComingTypes>(`https://api.themoviedb.org/3/movie/upcoming?api_key=9976e0dfa6f1817cd89602c8ff3fd6d7&language=ru-RU&page=1`)
    let { data } = res
    dispatch(addUpcomingMovie(data))

    if (!res) {
      rejectWithValue('error')
    }
  }
)

const initialState: IUpComingState = {
  loading: true,
  list: { results: [] },
  error: null
}

const bannerSlice = createSlice({
  name: '@@upcoming',
  initialState,
  reducers: {
    addUpcomingMovie: (state, action: PayloadAction<UpComingTypes>) => {
      state.list = action.payload
    }
  }
})



const { addUpcomingMovie } = bannerSlice.actions


export const bannerReducer = bannerSlice.reducer