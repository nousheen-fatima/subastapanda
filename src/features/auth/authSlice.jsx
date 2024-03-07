import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

// Register user

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ full_name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        full_name,
        email,
        password,
      });
      return handleResponse(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Login user

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ user_name, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email: user_name,
        password,
      });
      return handleResponse(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// logout

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("user");
      return null;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// forgot password

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const config = { headers: { "X-localization": "en" } };
      const { data } = await axios.post(
        `${BASE_URL}/forgot-password`,
        email,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// reset password

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (
    { token, passwords, email, confirm_password },
    { rejectWithValue }
  ) => {
    try {
      const config = { headers: { "X-localization": "en" } };
      const { data } = await axios.put(
        `${BASE_URL}/reset-password`,
        { passwords, confirm_password, email },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const handleResponse = (response) => {
  if (response.status === 200 && response.data.status === "Success") {
    const user = response.data.data;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    throw new Error(response.data.message || "Something went wrong");
  }
};

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// slice

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { user: payload.user, access_token: payload.access_token };
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload.message || "Login failed";
      })

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

// selector
export const authSelector = (state) => state.auth;
