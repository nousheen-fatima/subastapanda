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
export const fetchLastChanceBidData = createAsyncThunk(
  "bid/fetchLastChanceBidData",
  async () => {
    const { data } = await axios.get(`{{BASE_URL}}/products`);
    return data.data;
  }
);

const initialState = {
  lastChanceBidData: [],
  loading: false,
  error: null,
};

const bidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeBid.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeBid.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(placeBid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLastChanceBidData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLastChanceBidData.fulfilled, (state, action) => {
        state.loading = false;
        state.lastChanceBidData = action.payload;
      })
      .addCase(fetchLastChanceBidData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bidSlice.reducer;
