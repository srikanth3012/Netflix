import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TrailerVideo from "./TrailerVideo";
import MovieDetails from "./MoviesDetails";
import { useState } from "react";

const Play = () => {
  const [watch, setWatch] = useState(true);
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;
  const movies = useSelector((store) => store.Movies?.moviesList);
  const video = movies?.filter((item) => item?.id == id);
  const playHandler = () => {
    setWatch(!watch);
  };
  const backHandler = () => {
    navigate("/");
  };

  if (!video) return navigate(`/play/${id}`);
  const { original_title, overview, poster_path } = video[0];

  return (
    <>
      <div>
        <div className="h-screen">
          <MovieDetails
            Title={original_title}
            overview={overview}
            poster_path={poster_path}
            playButton={() => playHandler()}
            backButton={() => backHandler()}
          />
        </div>
        <div className="absolute z-10 mt-1">
          {!watch ? <TrailerVideo id={id} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Play;
