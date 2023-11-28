import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    userInfo: (state, actions) => {
      return actions.payload;
    },
    removeUserInfo: (state, actions) => {
      return null;
    },
  },
});
export const { userInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
