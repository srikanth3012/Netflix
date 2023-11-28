import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utills/movieSlicer";
import { API_OPTIONS } from "../utills/constants";

const useMovieList = () => {
  const dispatche = useDispatch();
  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line
  }, []);
  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatche(addMovies(json.results));
  };
};
export default useMovieList;
