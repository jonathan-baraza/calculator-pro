import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import allThemes from "@/themes/themes";

interface themeType {
  textColor: string;
  textColor2: string;
  background: string;
  background2: string;
  background3: string;
  btnClear: string;
  btnEqual: string;
}

interface initialStateType{
  name:string;
  theme:themeType;
}

const initialState: initialStateType ={
  name:"one",
  theme:allThemes.one
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
     switch(action.payload){
      case "one":
        state.name="one"
        state.theme=allThemes.one;
        break;
      case "two":
        state.name = "two";
        state.theme = allThemes.two;
        break;
      case "three":
        state.name = "three";
        state.theme = allThemes.three;
        break;
      default:
        state.name="one"
        state.theme=allThemes.one;
     }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
