import { useSelector } from "react-redux";
import TrailerTiltles from "./TrailerTitles";
import TrailerVideo from "./TrailerVideo";
import useMovieList from "../hooks/useMovieList";

const MainContainer = () => {
  useMovieList();
  const movies = useSelector((store) => store.Movies?.moviesList);

  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <TrailerTiltles Title={original_title} overview={overview} />
      <TrailerVideo id={id} />{" "}
    </>
  );
};
export default MainContainer;
