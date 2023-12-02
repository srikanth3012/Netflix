import { useNavigate } from "react-router-dom";

const TrailerTiltles = ({ Title, overview }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute text-white pt-[16%] bg-black w-screen aspect-video -mt-32 bg-opacity-30">
        <div></div>
        <h1 className="font-semibold text-7xl w-1/2 m-5">{Title}</h1>
        <p className="w-1/2 font-semibold px-[8%] m-5">{overview}</p>
        <div className="w-1/2 px-[8%]">
          {" "}
          <button
            className=" bg-gray-500 h-10 text-xl rounded-md w-32 m-5"
            onClick={() => navigate("/browser/play")}
          >
            Play
          </button>{" "}
          <button className=" bg-gray-500 h-10 text-xl rounded-md w-32 ">
            MoreInfo
          </button>
        </div>
      </div>
    </>
  );
};
export default TrailerTiltles;
