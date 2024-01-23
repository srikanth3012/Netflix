import { useSelector } from "react-redux";
import TrailerTiltles from "./TrailerTitles";
import TrailerVideo from "./TrailerVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.Movies?.moviesList);

  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <TrailerTiltles Title={original_title} overview={overview} id={id} />
      <TrailerVideo id={id} />{" "}
    </>
  );
};
export default MainContainer;
