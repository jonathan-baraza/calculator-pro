import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface themeType {
  name: string;
  background: string;
  background2: string;
  background3: string;
}

const initialState: themeType = {
  name: "one",
  background: "#3b4664",
  background2: "#181f32",
  background3: "#252d45",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
