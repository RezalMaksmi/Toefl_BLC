import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const backendURL = "http://localhost:8000";

export const getUsersAct = createAsyncThunk("get/users/api", async (url) => {
  try {
    const response = await axiosInstance.get(url);
    if (response) {
      console.log("detailnya apa : =", response.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// detailllll
export const getUsersActDetail = createAsyncThunk(
  "get/users/detail/api",
  async (id) => {
    try {
      const response = await axiosInstance.get(`${backendURL}/peserta/${id}`);

      console.log(response.data);

      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const Users = createSlice({
  name: "users",
  initialState: {
    data: null,
    detail: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getUsersAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   Detail Peserta
      .addCase(getUsersActDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersActDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getUsersActDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // detail peserta
    // builder
    //   .addCase(getAPIActById.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getAPIActById.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.dataDetail = action.payload;
    //   })
    //   .addCase(getAPIActById.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export default Users.reducer;
