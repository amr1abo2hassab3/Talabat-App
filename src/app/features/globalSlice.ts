import { createSlice } from "@reduxjs/toolkit";

interface IglobalState {
  isOpen: boolean;
}

const initialState: IglobalState = {
  isOpen: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer } = globalSlice.actions;

export default globalSlice.reducer;
