import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

export const getQuizAct = createAsyncThunk("get/quiz/api", async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    if (response) {
      return response.data.data;
    }
  } catch (error) {
    throw error;
  }
});

// export const getDetailQuizAct = createAsyncThunk(
//   "get/detail/quiz/api",
//   async (endpoint) => {
//     try {
//       const response = await axiosInstance.get(endpoint);
//       if (response) {
//         console.log("apa ini anjayyy", response.data);

//         return response.data.data;
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );

export const getTypeQuizAct = createAsyncThunk(
  "get/type/quiz/api",
  async () => {
    try {
      const response = await axiosInstance.get(`/jenis_soal`);
      if (response) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

// detail quiz
export const getDetailQuizAct = createAsyncThunk(
  "get/detail/quiz/api",
  async (id) => {
    try {
      const response = await axiosInstance.get(`/soal/detail/${id}`);

      if (response) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const setAddTypeQuizAct = createAsyncThunk(
  "set/type/quiz/api",
  async (data) => {
    try {
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const postAddQuizAct = createAsyncThunk(
  "post/quiz/api",
  async (data) => {
    try {
      const response = await axiosInstance.post(`/soal`, data);
      if (response.success === true) {
        toast.done(`${response.data.message}`, {
          position: "bottom-right",
        });

        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const deleteQuizAct = createAsyncThunk("delete/quiz/api", async (id) => {
  try {
    const response = await axiosInstance.delete(`/soal/${id}`);
    if (response) {
      toast.done(`Sukses Menghapus Soal`, {
        position: "bottom-right",
      });

      return response.data;
    }
  } catch (error) {
    throw error;
  }
});

export const updateQuizAct = createAsyncThunk(
  "update/quiz/api",
  async (id, body) => {
    try {
      const response = await axiosInstance.put(`/soal/${id}`, body);

      if (response.success === true) {
        toast.done(`${response.data.message}`, {
          position: "bottom-right",
        });

        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

const quiz = createSlice({
  name: "quiz",
  initialState: {
    soal: null,
    detail: null,
    typeQuiz: null,
    valueTypeQuiz: null,

    dataDetail: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuizAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.soal = action.payload;
      })
      .addCase(getQuizAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Type quiz
      .addCase(getTypeQuizAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTypeQuizAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.typeQuiz = action.payload;
      })
      .addCase(getTypeQuizAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(setAddTypeQuizAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setAddTypeQuizAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.valueTypeQuiz = action.payload;
      })
      .addCase(setAddTypeQuizAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Type quiz
      .addCase(getDetailQuizAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDetailQuizAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getDetailQuizAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quiz.reducer;
