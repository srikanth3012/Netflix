import React from "react";
import { useSelector } from "react-redux";
import Movies from "./Movies";

const SecondContain = () => {
  const movies = useSelector((store) => store.Movies?.moviesList);
  const popularMovies = useSelector((store) => store.Movies?.popularMovie);

  const slideRight = () => {
    let slider = document.getElementById("sliders");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideLeft = () => {
    let slider = document.getElementById("sliders");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  return (
    <>
      <div className="bg-black">
        <div className="-mt-44 relative">
          <div id="sliders">
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
