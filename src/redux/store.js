import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch/Get";
import authReducer from "./slices/authSlice";
// import getData from "./get/getData";
import { saveState, loadState } from "../utils/localStorage";
import Users from "./users/Users";
import Quiz from "./quiz/Quiz";
import Admin from "./admin/Admin";
import Test from "./test/Test";
import audioReducer from "./features/audioSlice";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    getAPI: fetchReducer,
    auth: authReducer,
    users: Users,
    quiz: Quiz,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});
export default store;
