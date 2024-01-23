import { useNavigate } from "react-router-dom";

const TrailerTiltles = ({ Title, overview, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute text-white pt-[20%] md:pt-[15%] bg-black bg-opacity-40  w-screen aspect-video x-auto md:ml-0">
        <h1 className="font-semibold text-base md:text-7xl w-1/2 m-2 md:m-5">
          {Title}
        </h1>
        <p className="hidden md:block w-1/2 font-semibold px-[8%] m-5">
          {overview}
        </p>
        <div className="w-1/2 md:px-[8%]">
          {" "}
          <button
            className=" bg-gray-500 h-8 text-base w-20 md:h-10 md:text-xl rounded-md md:w-32 my-auto"
            onClick={() => navigate(`/browser/play/${id}`)}
          >
            Play
          </button>{" "}
          <button className="hidden md:inline-block bg-gray-500 h-10 text-xl rounded-md w-32 ">
            MoreInfo
          </button>
        </div>
      </div>
    </>
  );
};
export default TrailerTiltles;
