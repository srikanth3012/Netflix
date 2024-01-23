const MovieCard = ({ item, playbutton }) => {
  return (
    <>
      <img
        src={"https://image.tmdb.org/t/p/w500" + item?.poster_path}
        alt="movieImg"
        className="mr-8 h-32 md:h-40 "
        onClick={playbutton}
      />
    </>
  );
};
export default MovieCard;
