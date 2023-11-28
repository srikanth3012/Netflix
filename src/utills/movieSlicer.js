import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "Movies",
  initialState: {
    moviesList: null,
    Trailer: null,
  },
  reducers: {
    addMovies: (state, actions) => {
      state.moviesList = actions.payload;
    },
    addTrailer: (state, actions) => {
      state.Trailer = actions.payload;
    },
  },
});
export const { addMovies, addTrailer } = movieSlicer.actions;
export default movieSlicer.reducer;
