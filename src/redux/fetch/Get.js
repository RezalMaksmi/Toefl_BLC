import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    if (response) {
      // console.log("typenya apaaaaa: ", typeof response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getAPIUsers = createAsyncThunk("get/api/User", async (url) => {
  try {
    const response = await axios.get(url);
    if (response) {
      console.log("typenya apaaaaa: ", typeof response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const resetLoading = createAsyncThunk("reset/loading", async () => {
  return true;
});

export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    products: [],
    product: [],
    users: [],
    user: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.fulfilled, (state, action) => {
        console.log("isinya apa :", typeof action.payload.data);
        console.log("isinya berapa :", action.payload);

        if (Array.isArray(action.payload)) {
          state.products = action.payload;
          state.loading = false;
        } else {
          state.product = action.payload;
          state.loading = false;
        }
        // state.products = action.payload;
        // state.loading = false;
      })
      // .addCase(getAPIUsers.fulfilled, (state, action) => {
      //   console.log("isinya apa :", typeof action.payload.data);
      //   console.log("isinya berapa :", action.payload);

      //   state.users = action.payload;
      //   state.loading = false;

      //   // state.products = action.payload;
      //   // state.loading = false;
      // });

      .addCase(getAPIUsers.fulfilled, (state, action) => {
        console.log("isinya apa :", typeof action.payload.data);
        console.log("isinya berapa :", action.payload);

        state.users = action.payload;
        state.loading = false;

        // state.products = action.payload;
        // state.loading = false;
      });
  },
});

export default fetchAPISlice.reducer;
