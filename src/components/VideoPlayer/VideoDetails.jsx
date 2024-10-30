import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { HiOutlineShare } from "react-icons/hi";
function VideoDetails() {
  return (
    <section className="w-[94vw]  max-w-[90vw] md:max-w-[97vw] md:w-full md:mt-20 h-[20vh] md:h-[10vh] px-2  md:px-[2vw] text-xs md:text-md   shadow-md text-white flex flex-col justify-around md:flex-row md:justify-between  md:items-center border-2 border-stone-500 rounded-lg">

      <div className="max-w-screen  md:w-[70%] flex justify-between md:justify-around  px-1">
        <div className="h-[6vh] w-[40%] md:w-[20%] inline-flex   justify-between items-center">
          <span className="text-base">{"20"} views..</span>
          <span>{"10"} Commetns..</span>
        </div>
        <div className="w-[40%] md:w-[35%] h-[6vh]   inline-flex   px-2 items-center justify-around">
          <div className="inline-flex items-center ">
            <span className="text-xl  md:text-2xl inline-flex items-center hover:text-xl duration-200 hover:text-blue-400 mx-1 md:mx-3">
              <SlLike />
            </span>{" "}
            <span>{"10k"}</span>
          </div>
          <div className="inline-flex items-center">
            <span className="text-xl md:text-2xl inline-flex items-center hover:text-xl duration-200 hover:text-blue-400 mx-1 md:mx-3">
              <SlDislike />
            </span>
            <span>{"2k"}</span>
          </div>
        </div>
      </div>

      <div className="md:w-[20%] h-[6vh]  inline-flex justify-around md:justify-evenly items-center">
        <span className="text-lime-500 text-2xl">
          {" "}
          <HiOutlineShare />
        </span>
        <button className="w-fit md:w-[8vw]  px-5 py-2  rounded-md text-white md:px-2 md:py-2  text-sm bg-gradient-to-tl from-blue-700 to-stone-800 ">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default VideoDetails;
