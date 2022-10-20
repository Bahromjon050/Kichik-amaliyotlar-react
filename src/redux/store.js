import { configureStore } from "@reduxjs/toolkit";
import createAll from "./Reducers/DateReducers";

export const store = configureStore({
  reducer: {
    createAll,
  },
});
