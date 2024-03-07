import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

export const fetchChats = createAsyncThunk(
  "chats/fetchChats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/chats?groupBy=product_id`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        console.log("pending>>");

        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        console.log("fulfilled>>");
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        console.log("rejected>>");
        state.loading = false;
        state.error = action.error.message || "Failed to fetch chats";
      });
  },
});

export default chatSlice.reducer;
