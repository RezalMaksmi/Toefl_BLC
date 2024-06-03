import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axiosInstance.get(url);
    if (response) {
      console.log(response.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// export const getAPIActById = createAsyncThunk("get/apiById", async (url) => {
//   try {
//     const response = await axiosInstance.get(url);
//     if (response) {
//       console.log(response.data);

//       return response.data.data;
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

const getData = createSlice({
  name: "get",
  initialState: {
    data: null,
    dataDetail: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAPIAct.rejected, (state, action) => {
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

export default getData.reducer;
