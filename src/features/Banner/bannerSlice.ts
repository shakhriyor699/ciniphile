import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUpComingState, UpComingTypes } from "../../types/types";






export const loadUpComingBanner = createAsyncThunk(
  '@@upcoming/loadBanner',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios.get<UpComingTypes>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
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
  },  
  extraReducers: (builder) => {
    builder
      .addCase(loadUpComingBanner.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadUpComingBanner.rejected, (state) => {
        state.loading = false
        state.error = 'Something went wrong'
      })
      .addCase(loadUpComingBanner.fulfilled, (state) => {
        state.loading = false
      })
  }
})



const { addUpcomingMovie } = bannerSlice.actions


export const bannerReducer = bannerSlice.reducer