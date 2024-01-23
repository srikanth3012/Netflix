import React from "react";
import { useSelector } from "react-redux";
import Movies from "./Movies";

const SecondContain = () => {
  const movies = useSelector((store) => store.Movies?.moviesList);
  const popularMovies = useSelector((store) => store.Movies?.popularMovie);

  return (
    <>
      <div className="bg-black">
        <div className="-mt-5 md:-mt-36 relative ">
          <div id="sliders" className="no-scrollbar overflow-y-scroll">
            {" "}
            <Movies title={"Now Playing"} Movies={movies} />
            <Movies title={"Popular Movies"} Movies={popularMovies} />
            <Movies title={"Horror Movies"} Movies={movies} />
            <Movies title={"Comedy Movies"} Movies={popularMovies} />
            <Movies title={"Cartoon Movies"} Movies={movies} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SecondContain;
