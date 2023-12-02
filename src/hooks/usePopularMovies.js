import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utills/movieSlicer";
import { API_OPTIONS } from "../utills/constants";

const usePopularMovies = () => {
  const dispatche = useDispatch();
  useEffect(() => {
    getPopularMovieData();
    // eslint-disable-next-line
  }, []);
  const getPopularMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatche(addPopularMovies(json.results));
  };
};
export default usePopularMovies;
