import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './features/LoginSlice'
import globalSlice from './features/globalSlice'


export const store = configureStore({
  reducer: {
    global:globalSlice ,
    login: loginSlice, 
  },


})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

