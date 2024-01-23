const MovieDetails = ({
  Title,
  overview,
  poster_path,
  playButton,
  backButton,
}) => {
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

      <div className="md:flex  ">
        <div className="pt-[20%] md:pt-[10%]">
          <img
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            alt="movieImg"
            className="mr-8 h-32 md:h-96 ml-[20%] "
          />
        </div>
        <div className="absolute text-white pt-[20%] md:pt-[16%] bg-black w-screen aspect-video bg-opacity-30 -mx-auto md:ml-0 md:pl-[18%]">
          <h1 className="font-semibold text-base md:text-xl w-1/2 m-2 md:m-5">
            {Title}
          </h1>
          <p className="hidden md:block w-1/2 font-semibold px-[8%] m-5 text-sm">
            {overview}
          </p>
          <div className="w-1/2 md:px-[8%]">
            {" "}
            <button
              className=" bg-gray-500 h-8 text-base w-20 md:h-10 md:text-xl rounded-md md:w-32 my-auto"
              onClick={playButton}
            >
              Play
            </button>{" "}
            <button
              className="hidden md:inline-block bg-gray-500 h-10 text-xl rounded-md w-32 "
              onClick={backButton}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
