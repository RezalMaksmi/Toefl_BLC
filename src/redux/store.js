import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch/Get";
import fetchReducerDetail from "./fetch/Get";

export const store = configureStore({
  reducer: {
    getAPI: fetchReducer,
    getAPIdetail: fetchReducerDetail,
  },
});

export default store;
