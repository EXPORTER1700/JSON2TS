import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeState {
  theme: ThemeTypes;
}

const initialState: ThemeState = {
  theme: '' as ThemeTypes,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeTypes>) {
      state.theme = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
