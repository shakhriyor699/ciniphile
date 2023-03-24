import { configureStore } from "@reduxjs/toolkit"
import { bannerReducer } from "../features/Banner/bannerSlice"
import { movieReducer } from "../features/Movies/moviesSlice"
import { serialsReducer } from "../features/Serial/serialsSlice"
import { topMovieReducer } from "../features/TopMovies/topMovieSlice"



const store = configureStore({
  reducer: {
    banner: bannerReducer,
    movie: movieReducer,
    serials: serialsReducer,
    topMovies: topMovieReducer
  },
  devTools: true
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch