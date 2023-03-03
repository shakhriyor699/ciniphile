import { configureStore } from "@reduxjs/toolkit"
import { bannerReducer } from "../features/Banner/bannerSlice"



const store = configureStore({
  reducer: {
    banner: bannerReducer
  },
  devTools: true
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch