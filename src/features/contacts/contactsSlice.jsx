import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

export const postContact = createAsyncThunk(
  "contacts/postContact",
  async ({ name, email, subject, message }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/contacts/store`, {
        name,
        email,
        subject,
        message,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactsSlice.reducer;
