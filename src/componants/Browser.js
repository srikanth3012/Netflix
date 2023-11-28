import React from "react";
import MainContainer from "./Maincontainer";
import SecondContain from "./Secondcontain";

const Browser = () => {
  return (
    <>
      <MainContainer />
      <SecondContain />
      {/* <h1 className="text-lg flex flex-wrap h-screen overflow-scroll">
        {moviedata.map((item) => (
          <l1 id={item.id}>
            <Link to={"/browser/play"}>{movieCard(item)}</Link>
          </l1>
        ))}
      </h1> */}
    </>
  );
};
export default Browser;
