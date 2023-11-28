import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import movieCard from "./Moviecard";

const SecondContain = () => {
  const movies = useSelector((store) => store.Movies?.moviesList);
  console.log(movies);
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  if (!movies) return;
  return (
    <>
      <div className="">
        {" "}
        <h1 className=" mt-10 m-5 items-start font-semibold text-xl">
          Now Playing
        </h1>
        <div className="flex">
          <button
            className="text-6xl bg-slate-600 rounded-full h-16  mt-10"
            onClick={slideLeft}
          >
            {"<"}
          </button>
          <h1
            className="text-lg flex flex-row overflow-scroll scroll-smooth"
            id="slider"
          >
            {movies.map((item) => (
              <l1 key={item.id}>
                <Link to={"/browser/play"}>{movieCard(item)}</Link>
              </l1>
            ))}
          </h1>
          <button
            className="text-6xl bg-slate-600 rounded-full h-16  mt-10"
            onClick={slideRight}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};
export default SecondContain;
