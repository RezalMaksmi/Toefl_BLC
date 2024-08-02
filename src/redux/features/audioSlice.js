import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Thunk untuk mengunggah audio
export const uploadAudio = createAsyncThunk(
  "audio/uploadAudio",
  async (id, audioBlob, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.wav");

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
    audioBlob: null,
    recording: false,
    status: "idle",
    error: null,
  },
  reducers: {
    setAudioBlob(state, action) {
      state.audioBlob = action.payload;
    },
    setRecording(state, action) {
      state.recording = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadAudio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadAudio.fulfilled, (state) => {
        state.status = "succeeded";
        state.audioBlob = null;
        // Clear audioBlob after upload
      })
      .addCase(uploadAudio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setAudioBlob, setRecording } = audioSlice.actions;

export default audioSlice.reducer;
