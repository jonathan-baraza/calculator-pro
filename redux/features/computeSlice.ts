import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface operationType {
  expression: string;
  answer: string;
  firstTerm: number;
  secondTerm: number;
  operator: string;
  showBlinker: boolean;
}

const operation: operationType = {
  expression: "",
  answer: "",
  firstTerm: 0,
  secondTerm: 0,
  operator: "",
  showBlinker: false,
};

const computeSlice = createSlice({
  name: "compute",
  initialState: operation,
  reducers: {
    setExpression: (state, action: PayloadAction<string>) => {
      state.expression += action.payload;
      state.showBlinker = true;
    },
    del: (state) => {
      state.expression = state.expression.slice(0, -1);
    },
    reset: (state) => {
      state.answer = "";
      state.expression = "";
      state.firstTerm = 0;
      state.secondTerm = 0;
      state.operator = "";
      state.showBlinker = false;
    },
  },
});

export const { setExpression, del, reset } = computeSlice.actions;
export default computeSlice.reducer;
