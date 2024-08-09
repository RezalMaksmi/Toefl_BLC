// `/soal/upload_audio/${id}`
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Thunk untuk meng-upload audio
export const uploadAudio = createAsyncThunk(
  "audio/uploadAudio",
  async (id, file, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axiosInstance.post(
        `/soal/upload_audio/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const audioSlice = createSlice({
  name: "audio",
  initialState: {
    status: "idle",
    error: null,
    audioUrl: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadAudio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadAudio.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.audioUrl = action.payload.url;
      })
      .addCase(uploadAudio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default audioSlice.reducer;
