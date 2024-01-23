import { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./Moviecard";
import { useNavigate } from "react-router-dom";

const GptSearch = () => {
  const [searchMovies, setSearchMovies] = useState(false);
  const movies = useSelector((store) => store.Movies?.moviesList);
  const navigate = useNavigate();
  const playHandler = (id) => {
    navigate(`/browser/play/${id}`);
  };
  return (
    <>
      <div className="-mt-20">
        <div className="w-screen h-full bg-black bg-opacity-70 fixed -z-10"></div>
        <img
          alt="bgImg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="w-screen h-screen fixed -z-30"
        />
      </div>
      <div className=" mt-[17%]">
        <input
          type="text"
          className="w-1/3 h-10 rounded-lg p-2"
          placeholder="ex:top 5 comedy movies"
          onChange={(e) => e.target.value}
        />
        <button
          className="text-white text-lg font-bold m-5 px-3 py-2 bg-green-500 rounded-lg"
          onClick={() => setSearchMovies(!searchMovies)}
        >
          search
        </button>
      </div>{" "}
      {searchMovies && (
        <div className="flex justify-center mt-10">
          {movies
            .filter((item, index) => index < 5)
            .map((item) => (
              <MovieCard
                item={item}
                key={item.id}
                playbutton={() => playHandler(item?.id)}
              />
            ))}
        </div>
      )}
    </>
  );
};
export default GptSearch;
