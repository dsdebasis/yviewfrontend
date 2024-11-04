import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { HiOutlineShare } from "react-icons/hi";
function VideoDetails(data) {
  return (
    <section className="text-white ">
      <div className="px-3">
        <p className=" font-bold mb-5 font-sans capitalize text-orange-300 leading-[1px]">
          {data.data?.title}
        </p>
        <span className="text-sky-300">Uplaoded By {data.data?.createdAt}</span>
        <p className="text-lime-400 ">{data.data?.description}</p>
      </div>
      <section className="w-[94vw]  max-w-[90vw] md:max-w-[97vw] md:w-full mt-2 md:mt-5 h-[20vh] md:h-[10vh] px-2  md:px-[2vw] text-xs md:text-md    text-white flex flex-col justify-around md:flex-row md:justify-between  md:items-center bg-gradient-to-br from-slate-600 to-slate-900 rounded-md">
        <div className="max-w-screen  md:w-[70%] flex justify-between md:justify-around  px-1">
          <div className="h-[6vh] w-[40%] md:w-[20%] inline-flex   justify-between items-center">
            <span className="text-base">{data.data.views} views..</span>
            <span>{data.data?.comments || "0"} Commetns..</span>
          </div>
          <div className="w-[40%] md:w-[35%] h-[6vh]   inline-flex   px-2 items-center justify-around">
            <div className="inline-flex items-center ">
              <span className="text-xl  md:text-2xl inline-flex items-center hover:text-xl duration-200 hover:text-blue-400 mx-1 md:mx-3">
                <SlLike />
              </span>
              <span>{data.data?.likes || "0"}</span>
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
    </section>
  );
}

export default VideoDetails;
