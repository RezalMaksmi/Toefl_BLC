import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch/Get";

export const store = configureStore({
  reducer: {
    getAPI: fetchReducer,
  },
});

export default store;
