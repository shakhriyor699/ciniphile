import { configureStore } from "@reduxjs/toolkit"
import { bannerReducer } from "../features/Banner/bannerSlice"
import { movieReducer } from "../features/Movie/movieSlice"
import {  moviesReducer } from "../features/Movies/moviesSlice"
import { serialsReducer } from "../features/Serial/serialsSlice"
import { topMovieReducer } from "../features/TopMovies/topMovieSlice"



const store = configureStore({
  reducer: {
    banner: bannerReducer,
    movies: moviesReducer,
    serials: serialsReducer,
    topMovies: topMovieReducer,
    movie: movieReducer
  },
  devTools: true
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch