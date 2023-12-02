import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "Movies",
  initialState: {
    moviesList: null,
    popularMovie: null,
    Trailer: null,
  },
  reducers: {
    addMovies: (state, actions) => {
      state.moviesList = actions.payload;
    },
    addPopularMovies: (state, actions) => {
      state.popularMovie = actions.payload;
    },
    addTrailer: (state, actions) => {
      state.Trailer = actions.payload;
    },
  },
});
export const { addMovies, addTrailer, addPopularMovies } = movieSlicer.actions;
export default movieSlicer.reducer;
