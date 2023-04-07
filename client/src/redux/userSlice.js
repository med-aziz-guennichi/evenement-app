import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.userInfo = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.userInfo = null;
    },
    updateInfoSuccess: (state, action) => {
      state.isFetching = true;
      state.userInfo = action.payload;
    },
    updateImageSuccess: (state, action) => {
      state.isFetching = true;
      state.userInfo = action.payload;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  updateInfoSuccess,
  updateImageSuccess,
} = userSlice.actions;
export default userSlice.reducer;
