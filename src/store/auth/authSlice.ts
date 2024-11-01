import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  user: User | null;
  token: string | null;
  error: string | null;
}
interface User {
  username: string;
}

const initialState: AuthState = {
  status: "not-authenticated",
  user: null,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: () => {
      // state.value += 1;
    },
  },
});

export const { increment } = authSlice.actions;

export default authSlice.reducer;
