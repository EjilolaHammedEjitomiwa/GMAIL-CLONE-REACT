import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, actions) => {
      state.user = actions.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
