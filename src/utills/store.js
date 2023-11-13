import { configureStore } from "@reduxjs/toolkit";
import { userInfo } from "./userSlicer";

const store = configureStore({
  reducer: {
    userInfo: userInfo,
  },
});
export default store;
