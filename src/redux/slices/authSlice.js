import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import Cookies from "js-cookie";

const backendURL = "http://localhost:8000";

// Async thunk untuk login
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await axiosInstance.post(
      `${backendURL}/auth/login/admin`,
      {
        username,
        password,
      }
    );

    const newToken = `${response.data.token}`;
    Cookies.set("token", newToken, { expires: 1 });
    console.log(response);
    const data = response.data;
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("dataUser") || null,
    token: Cookies.get("token") || null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      localStorage.removeItem("dataUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
