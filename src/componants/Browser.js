import React from "react";
import MainContainer from "./Maincontainer";
import SecondContain from "./Secondcontain";
import useMovieList from "../hooks/useMovieList";
import usePopularMovies from "../hooks/usePopularMovies";

const Browser = () => {
  useMovieList();
  usePopularMovies();
  return (
    <>
      <MainContainer />
      <SecondContain />
    </>
  );
};
export default Browser;
