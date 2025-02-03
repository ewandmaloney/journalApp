import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface AuthState {
  status: string; // not-authenticated, checking authenticated
  logged: boolean;
  user: User | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: "not-authenticated",
  logged: false,
  user: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = action.payload.status;
      state.logged = action.payload.logged;
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.status = "not-authenticated";
      state.logged = false;
      state.user = null;
      state.errorMessage = action.payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
