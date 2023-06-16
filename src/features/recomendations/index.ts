import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { IMovie } from "../../types/types";





type argAsyncType = {
  type: string,
  id: string | undefined
}



export const loadRecomendations = createAsyncThunk<IMovie, argAsyncType>(
  '@@trailer/loadRecomendations',
  async ({ type, id }) => {
    const { data } = await axios.get<IMovie>(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    return data
  }
)

interface IRecomendationsState {
  recomendations: IMovie
  isLoading: boolean
}

const initialState: IRecomendationsState = {
  recomendations: {} as IMovie,
  isLoading: false
}

const recomendationsSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecomendations.fulfilled, (state, action) => {
        state.recomendations = action.payload
        state.isLoading = false
      })
      .addCase(loadRecomendations.pending, (state) => {
        state.isLoading = true
      })
  }
})

export default recomendationsSlice.reducer
export const selectRecomendations = (state: RootState) => state.recomendations.recomendations.results
