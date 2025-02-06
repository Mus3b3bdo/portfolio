import { createSlice } from '@reduxjs/toolkit';
import { themeType, themeStatus } from '../types/types';

const initialState = {
  theme: "light" as themeType, // default theme
  status: "active" as themeStatus,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.theme = "light";
      state.status = "active";
    },
    setDarkTheme: (state) => {
      state.theme = "dark";
      state.status = "active";
    },
    setIdleTheme: (state) => {
      state.status = "idle";
    },
  },
});

export const { setLightTheme, setDarkTheme, setIdleTheme } = themeSlice.actions;
export default themeSlice.reducer;