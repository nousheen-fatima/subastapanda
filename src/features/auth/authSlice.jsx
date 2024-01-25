import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "X-localization": "en",
          },
        }
      );

      console.log("data", response.data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        return { ...response.data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log("Error", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "users/login",
  async ({ user_name, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          user_name,
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response.data);
      if (response.status === 200 && response.data.status === "Success") {
        const user = response.data.data.user;
        const accessToken = response.data.data.access_token;

        // Save the user and access token in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", accessToken);

        return user;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log("Error", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await localStorage.removeItem("auth");
});

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
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.user.email;
        state.username = payload.user.name;
      })
      .addCase(signupUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.username = payload.name;
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        console.log("payload", payload);
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isFetching = true;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state) => state.auth;
