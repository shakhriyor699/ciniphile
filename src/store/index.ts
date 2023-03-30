import { configureStore } from "@reduxjs/toolkit"
import { bannerReducer } from "../features/Banner/bannerSlice"
import { movieReducer } from "../features/Movie/movieSlice"
import { moviesReducer } from "../features/Movies/moviesSlice"
import { serialReducer } from "../features/Serial/serialSlice"
import { serialsReducer } from "../features/Serials/serialsSlice"
import { topMovieReducer } from "../features/TopMovies/topMovieSlice"



const store = configureStore({
  reducer: {
    banner: bannerReducer,
    movies: moviesReducer,
    serials: serialsReducer,
    topMovies: topMovieReducer,
    movie: movieReducer,
    serial: serialReducer
  },
  devTools: true
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch