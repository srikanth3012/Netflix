import { useNavigate } from "react-router-dom";
import MovieCard from "./Moviecard";

const Movies = ({ title, Movies }) => {
  // console.log(Movies);
  const navigate = useNavigate();

  const playHandler = (id) => {
    navigate(`/play/${id}`);
  };
  return (
    Movies && (
      <>
        <h1
          id={title}
          className="text-white flex justify-start ml-6 font-semibold text:base md:text-lg m-5"
        >
          {title}
        </h1>
        <div className="flex">
          <div
            className="list-none flex overflow-x-scroll scroll-smooth  no-scrollbar ml-3"
            id={title}
          >
            {Movies.map((item) => (
              <MovieCard
                key={item.id}
                item={item}
                playbutton={() => playHandler(item?.id)}
              />
            ))}
          </div>
        </div>
      </>
    )
  );
};
export default Movies;
