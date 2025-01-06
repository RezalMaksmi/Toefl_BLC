import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const backendURL = "http://api.ept-blc.com";

export const getUsersAct = createAsyncThunk("get/users/api", async (url) => {
  try {
    const response = await axiosInstance.get(`${backendURL}${url}`);
    if (response) {
      // console.log("detailnya apa : =", response.data);
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const createUsersAct = createAsyncThunk(
  "post/users/api",
  async (body) => {
    try {
      const response = await axiosInstance.post(
        `http://api.ept-blc.com/peserta/`,
        body
      );
      if (response) {
        toast.done(`pppppppppppppppppp${response.data.message}`, {
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

// Delete
export const usersDeleteAct = createAsyncThunk(
  "delete/users/api",
  async (id) => {
    try {
      const response = await axiosInstance.delete(
        `${backendURL}/peserta/${id}`
      );
      if (response) {
        toast.done(`BBBB${response.data.message}`, {
          position: "bottom-right",
        });
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const activateUserTestAct = createAsyncThunk(
  "activate/user/test/api",
  async (id, test) => {
    try {
      const response = await axiosInstance.post(
        `${backendURL}/peserta/active/${id}`,
        { id_test: test }
      );
      if (response) {
        toast.done(`Activated user with id ${id}`, {
          position: "bottom-right",
        });
        console.log(response.data);
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

export const cancelUserTestAct = createAsyncThunk(
  "cancel/user/test/api",
  async (id, test) => {
    try {
      const response = await axiosInstance.delete(
        `${backendURL}/peserta/test/${id}`
      );
      if (response) {
        toast.done(`Canceled user with id ${id}`, {
          position: "bottom-right",
        });
        console.log(response.data);
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
      })

      //   Delete
      .addCase(usersDeleteAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(usersDeleteAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(usersDeleteAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Activate User Test
      .addCase(activateUserTestAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(activateUserTestAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(activateUserTestAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Cancel User Test
      .addCase(cancelUserTestAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(cancelUserTestAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(cancelUserTestAct.rejected, (state, action) => {
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
