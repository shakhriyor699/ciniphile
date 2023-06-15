import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { IMovie } from "../../types/types";

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



type argAsyncType = {
  type: string,
  id: string | undefined
}

// https://api.themoviedb.org/3/tv/500/videos?language=en-US
// https://api.themoviedb.org/3/movie/505/videos?language=en-US

export const loadRecomendations = createAsyncThunk<IMovie, argAsyncType>(
  '@@trailer/loadRecomendations',
  async ({ type, id }) => {
    const { data } = await axios.get<IMovie>(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    return data
  }
)

interface IRecomendationsState {
  recomendations: IMovie
}

const initialState: IRecomendationsState = {
  recomendations: {} as IMovie,
}

const recomendationsSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecomendations.fulfilled, (state, action) => {
        state.recomendations = action.payload
      })
  }
})

export default recomendationsSlice.reducer
export const selectTrailer = (state: RootState) => state.trailer.trailer.results