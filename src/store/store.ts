import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculatorSlice/calculatorSlice";

const store = configureStore({
  reducer: {
    calculatorValue: calculatorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
