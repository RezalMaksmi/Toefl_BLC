import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const backendURL = "http://localhost:8000";

export const getTestAct = createAsyncThunk("get/test/api", async (url) => {
  try {
    const response = await axiosInstance.get(`${backendURL}${url}`);
    if (response) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// detail Test
export const getTestActDetail = createAsyncThunk(
  "get/test/detail/api",
  async (id) => {
    try {
      const response = await axiosInstance.get(`${backendURL}/test/${id}`);

      // console.log(response.data);

      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

//Active Test
export const activeTestAct = createAsyncThunk(
  "active/test/api",
  async (id) => {
    try {
      const response = await axiosInstance.get(
        `${backendURL}/test/update/${id}`
      );
      if (response) {
        toast.done(`${response.data.message}`, {
          position: "bottom-right",
        });
        return response.data;
      }
    } catch (error) {
      console.log(error);
      toast.done(`${error.response.message}`, {
        position: "bottom-right",
      });
      throw error;
    }
  }
);

const Test = createSlice({
  name: "test",
  initialState: {
    data: null,
    detail: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // tambah admin
      .addCase(getTestAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTestAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getTestAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   Detail Test
      .addCase(getTestActDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTestActDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getTestActDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   Active Test
      .addCase(activeTestAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(activeTestAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(activeTestAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

  },
});

export default Test.reducer;
