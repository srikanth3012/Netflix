import MovieCard from "./Moviecard";

const Movies = ({ title, Movies }) => {
  // console.log(Movies);
  return (
    Movies && (
      <div>
        <h1
          id={Movies[0].genre_ids[2]}
          className="text-white flex justify-start ml-6 font-semibold text-lg m-5"
        >
          {title}
        </h1>

        <div className="list-none flex overflow-x-scroll scroll-smooth  no-scrollbar">
          {Movies.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  );
};
export default Movies;
