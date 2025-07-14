import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '../../config/axios.config';
import type { IApiError, ILoginForm, ILoginResponse } from '../../interfaces';
import type { AxiosError } from 'axios';
import CookiesService from "../../services/CookieServices"

export interface ILoginSlice {
  loading: boolean;
  data: ILoginResponse | null;
  error: IApiError | null;
}

const initialState: ILoginSlice = {
    loading: false,
    data: null,
    error: null,
}


export const userLogin = createAsyncThunk<ILoginResponse , ILoginForm ,  { rejectValue: IApiError } >("login/userLogin", async (userData:ILoginForm , thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const { data } = await axiosInstance.post<ILoginResponse>(`/api/Accounts/Login` ,userData)
        return data;
    } catch (error) {
            const err = error as AxiosError<IApiError>;
        return rejectWithValue(err.response?.data ||  { message: "Unknown error" });
    }
})

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
        state.loading = false;
        state.data = action.payload;
        const date = new Date();
        const IN_DAYS = 3;
        const EXPIERS_IN_DAYS = 1000 * 60 * 60 * 24 * IN_DAYS;
        date.setTime(date.getTime() + EXPIERS_IN_DAYS)
        const options = {path:"/" , expires:date}
        CookiesService.set("userData", action.payload, options)
        setTimeout(() => {
        window.location.reload()
        } , 3000)
      })
    .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { message: "Unknown error" };
      });

  },
});


export default loginSlice.reducer