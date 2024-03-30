import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    if (response) {
      console.log("typenya apaaaaa: ", typeof response.data.data);
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const deleteAPIAct = createAsyncThunk("delete/api", async (url) => {
  try {
    const response = await axios.delete(url);
    if (response) {
      console.log("typenya apaaaaa: ", response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const postAPIAct = createAsyncThunk(
  "post/api",
  async ({ url, body }) => {
    try {
      const response = await axios.post(url, body);
      if (response) {
        console.log("typenya apaaaaa: ", response);
        console.log("url apaaaaa: ", body);
        return response.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const resetLoading = createAsyncThunk("reset/loading", async () => {
  return true;
});

export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    users: [],
    user: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAPIAct.fulfilled, (state, action) => {
      console.log("isinya apa :", action.payload);
      // console.log("isinya berapa :", action.payload);

      if (Array.isArray(action.payload)) {
        state.users = action.payload;
        state.loading = false;
      } else {
        state.user = action.payload;
        state.loading = false;
      }
      // state.products = action.payload;
      // state.loading = false;
    });
    // .addCase(getAPIUsers.fulfilled, (state, action) => {
    //   console.log("isinya apa :", typeof action.payload.data);
    //   console.log("isinya berapa :", action.payload);

    //   state.users = action.payload;
    //   state.loading = false;

    //   // state.products = action.payload;
    //   // state.loading = false;
    // });

    // .addCase(getAPIUsers.fulfilled, (state, action) => {
    //   console.log("isinya apa :", typeof action.payload.data);
    //   console.log("isinya berapa :", action.payload);

    //   state.users = action.payload;
    //   state.loading = false;

    //   // state.products = action.payload;
    //   // state.loading = false;
    // });
  },
});

export default fetchAPISlice.reducer;
