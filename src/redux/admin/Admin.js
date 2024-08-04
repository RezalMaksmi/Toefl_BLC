import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const backendURL = "http://localhost:8000";

export const getAdminAct = createAsyncThunk("get/admin/api", async (url) => {
  try {
    const response = await axiosInstance.get(`${backendURL}${url}`);
    if (response) {
      // console.log("menampilkan data admin : =", response.data);

      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//tambah admin
export const createAdminAct = createAsyncThunk(
  "post/admin/api",
  async (body) => {
    try {
      const response = await axiosInstance.post(
        `${backendURL}/admin`,
        body
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

// detail Admin
export const getAdminActDetail = createAsyncThunk(
  "get/admin/detail/api",
  async (id) => {
    try {
      const response = await axiosInstance.get(`${backendURL}/admin/${id}`);

      console.log(response.data);

      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// Hapus Admin
export const adminDeleteAct = createAsyncThunk(
  "delete/admin/api",
  async (id) => {
    try {
      const response = await axiosInstance.delete(
        `${backendURL}/admin/${id}`
      );
      if (response) {
        toast.done(`${response.data.message}`, {
          position: "bottom-right",
        });
        return response.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

//Update Password
export const updatePasswordAdminAct = createAsyncThunk(
  "update-password/admin/api",
  async (id, body) => {
    try {
      const response = await axiosInstance.put(
        `${backendURL}/admin/${id}`,
        body
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

const Admin = createSlice({
  name: "admin",
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
      .addCase(getAdminAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAdminAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAdminAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   Detail Admin
      .addCase(getAdminActDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAdminActDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getAdminActDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   Delete Admin
      .addCase(adminDeleteAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(adminDeleteAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(adminDeleteAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   Update Password Admin
      .addCase(updatePasswordAdminAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePasswordAdminAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(updatePasswordAdminAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

  },
});

export default Admin.reducer;
