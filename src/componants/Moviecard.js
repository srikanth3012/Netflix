const MovieCard = ({ item }) => {
  return (
    <>
      <div>
        <div className="w-40 ml-1 items-center ">
          <img
            src={"https://image.tmdb.org/t/p/w500" + item?.poster_path}
            alt="movieImg"
            className="ml-8 h-40 content-center"
          />
        </div>
      </div>
    </>
  );
};
export default MovieCard;
