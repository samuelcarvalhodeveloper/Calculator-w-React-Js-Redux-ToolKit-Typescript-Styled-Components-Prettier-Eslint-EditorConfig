import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from "../../interfaces";

const calculatorSlice = createSlice({
  name: "Calculator",
  initialState: { value: "" },
  reducers: {
    addButtonCharacters: (state: ReduxState, action: PayloadAction<string>): void => {
      if (state.value === "Error") {
        state.value = "";
        return;
      }
      state.value += action.payload;
    },

    result: (state: ReduxState): void => {
      if (state.value === "Error" || state.value === undefined) {
        state.value = "Error";
        return;
      }
      if (!state.value) return;
      state.value = state.value.toString();
      try {
        state.value = eval(state.value);
        state.value = state.value.toString();
      } catch (e) {
        state.value = "Error";
      }
    },

    clean: (state: ReduxState): void => {
      state.value = "";
    },

    backspace: (state: ReduxState): void => {
      try {
        if (state.value === "Error") {
          state.value = "";
          return;
        }
        state.value = state.value.slice(0, -1);
      } catch (e) {
        state.value = "";
      }
    },
  },
});

export const {
  result, addButtonCharacters, clean, backspace,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
