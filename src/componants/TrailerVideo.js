import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
const TrailerVideo = ({ id }) => {
  useMoviesTrailer(id);
  const trailer = useSelector((store) => store.Movies?.Trailer);
  if (!trailer) return;
  const { key } = trailer;

  return (
    <div className="">
      <iframe
        className="w-screen h-screen"
        src={"https://www.youtube.com/embed/" + key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default TrailerVideo;
