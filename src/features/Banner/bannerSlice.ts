import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface IUpComingState {
  loading: boolean,
  list: unknown[],
  error: unknown
}

type Banner = {

}

export const loadUpComingBanner = createAsyncThunk(
  '@@upcoming/loadBanner',
  async (_, { dispatch }) => {

  }
)

const initialState: IUpComingState = {
  loading: true,
  list: [],
  error: null
}

const bannerSlice = createSlice({
  name: '@@upcoming',
  initialState,
  reducers: {

  }
})