import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    userInfo: (state, action) => {
      return action.payload;
    },
  },
});
export const { userInfo } = userSlice.actions;
export default userSlice.reducer;
