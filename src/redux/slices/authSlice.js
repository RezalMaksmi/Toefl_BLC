import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const backendURL = "http://localhost:8000";

// Async thunk untuk login
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    try {
      const response = await axiosInstance.post(
        `${backendURL}/auth/login/admin`,
        {
          username,
          password,
        }
      );

      const newToken = `${response.data.data.access_token}`;
      Cookies.set("token", newToken, { expires: 1 });
      Cookies.set("type", "admin", { expires: 1 });
      localStorage.setItem("user", JSON.stringify(response.data));

      const data = response.data;

      return data;
    } catch (error) {
      toast.error(`${error}`, {
        position: "bottom-right",
      });
      return error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") || null,
    token: Cookies.get("token") || null,
    status: "idle",
    type: Cookies.get("type") || null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      Cookies.remove("type");
      localStorage.removeItem("dataUser");
      toast.done("Keluar!", {
        position: "bottom-right",
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.type = "admin";
        state.user = action.payload.data.user;
        state.token = action.payload.data.access_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
