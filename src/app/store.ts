import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './features/LoginSlice'
import cartSlice from './features/CartSlice'
import globalSlice from './features/globalSlice'


export const store = configureStore({
  reducer: {
    global:globalSlice ,
    login: loginSlice, 
    cart:cartSlice,
  },


})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

