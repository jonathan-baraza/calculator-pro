import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface operationType {
  expression: string;
  answer: string;
  firstTerm: number;
  secondTerm: number;
  operator: string;
  showBlinker: boolean;
  currentTerm: string;
  result: string;
  showResult: boolean;
}

const operation: operationType = {
  expression: "",
  answer: "",
  firstTerm: 0,
  secondTerm: 0,
  operator: "",
  showBlinker: false,
  currentTerm: "",
  result: "",
  showResult: false,
};

const computeSlice = createSlice({
  name: "compute",
  initialState: operation,
  reducers: {
    setExpression: (state, action: PayloadAction<string>) => {
      state.expression += action.payload;
      state.currentTerm = action.payload;
      state.showBlinker = true;
    },
    del: (state) => {
      state.expression = state.expression.slice(0, -1);
      state.currentTerm = state.expression.charAt(state.expression.length - 1);
    },
    reset: (state) => {
      state.answer = "";
      state.expression = "";
      state.firstTerm = 0;
      state.secondTerm = 0;
      state.operator = "";
      state.showBlinker = false;
      state.currentTerm = "";
      state.result = "";
      state.showResult = false;
    },
    setOperator: (state, action: PayloadAction<string>) => {
      computeSlice.caseReducers.setExpression(state, action);
      //   state.firstTerm = Number(state.expression);
      //   state.operator = action.payload;
      state.operator = action.payload;
    },
    compute: (state, action: PayloadAction<string>) => {
      const terms: string[] = state.expression.split(state.operator);
      state.result = state.expression;
      const first = Number(terms[0]);
      const second = Number(terms[1]);
      let answer;
      switch (state.operator) {
        case "+":
          answer = first + second;
          break;
        case "-":
          answer = first - second;
          break;
        case "x":
          answer = first * second;
          break;
        case "/":
          answer = first / second;
          break;
        default:
          computeSlice.caseReducers.reset(state);
          break;
      }
      state.expression = String(answer);
      state.showBlinker = false;
      state.showResult = true;
    },
  },
});

export const { setExpression, del, reset, setOperator, compute } =
  computeSlice.actions;
export default computeSlice.reducer;
