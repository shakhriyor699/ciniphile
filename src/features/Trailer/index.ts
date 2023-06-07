import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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


// https://api.themoviedb.org/3/tv/500/videos?language=en-US
// https://api.themoviedb.org/3/movie/505/videos?language=en-US

export const loadTrailer = createAsyncThunk<TrailerType, number | string>(
  '@@trailer/loadTrailer',
  async (id, type) => {
    const { data } = await axios.get<TrailerType>(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    return data
  }
)

interface ITrailerState {
  trailer: TrailerType
}

const initialState: ITrailerState = {
  trailer: {
    id: 0,
    results: []
  },
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