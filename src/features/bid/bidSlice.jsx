import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

export const placeBid = createAsyncThunk(
  "bid/placeBid",
  async ({ productId, bidValue, accessToken }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/bids/store`,
        { product_id: productId, amount: bidValue },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "X-localization": "en",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
};

const bidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeBid.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(placeBid.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(placeBid.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default bidSlice.reducer;
