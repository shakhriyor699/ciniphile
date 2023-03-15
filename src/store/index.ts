import { configureStore } from "@reduxjs/toolkit"
import { bannerReducer } from "../features/Banner/bannerSlice"
import { movieReducer } from "../features/Movies/moviesSlice"



const store = configureStore({
  reducer: {
    banner: bannerReducer,
    movie: movieReducer
  },
  devTools: true
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch