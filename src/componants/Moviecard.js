const movieCard = (item) => {
  return (
    <>
      <div className="w-40 ml-1 items-center">
        <img
          src={"https://image.tmdb.org/t/p/w200" + item?.poster_path}
          alt="movieImg"
          className="pl-8 h-40 content-center"
        />
        <h1 className="">{item?.original_title}</h1>
      </div>
    </>
  );
};
export default movieCard;
