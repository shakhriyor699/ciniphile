import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

type TrailerVideoType = {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string
}

type TrailerType = {
  id: number,
  results: TrailerVideoType[]
}

type argAsyncType = {
  type: string,
  id: string | undefined
}

// https://api.themoviedb.org/3/tv/500/videos?language=en-US
// https://api.themoviedb.org/3/movie/505/videos?language=en-US

export const loadTrailer = createAsyncThunk<TrailerType, argAsyncType>(
  '@@trailer/loadTrailer',
  async ({ type, id }) => {
    const { data } = await axios.get<TrailerType>(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-EN`)
    return data
  }
)

interface ITrailerState {
  trailer: TrailerType
}

const initialState: ITrailerState = {
  trailer: {} as TrailerType,
}

const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTrailer.fulfilled, (state, action) => {
        state.trailer = action.payload
      })
  }
})

export default trailerSlice.reducer
export const selectTrailer = (state: RootState) => state.trailer.trailer.results