import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utills/movieSlicer";
import { API_OPTIONS } from "../utills/constants";

const useMoviesTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrailerMovie();
    // eslint-disable-next-line
  }, []);

  const getTrailerMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json?.results?.filter(
      (trailer) => trailer?.type === "Trailer"
    );
    const trailerVideo = trailer[0];

    dispatch(addTrailer(trailerVideo));
  };
};

export default useMoviesTrailer;
