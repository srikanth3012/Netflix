import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userSlicer";
import movieSlicer from "./movieSlicer";

const store = configureStore({
  reducer: {
    user: userSlicer,
    Movies: movieSlicer,
  },
});
export default store;
