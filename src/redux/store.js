import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch/Get";
import fetchReducerDetail from "./fetch/Get";
import authReducer from "./slices/authSlice";
// import getData from "./get/getData";
import { saveState, loadState } from "../utils/localStorage";
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    getAPI: fetchReducer,
    getAPIdetail: fetchReducerDetail,
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});
export default store;
