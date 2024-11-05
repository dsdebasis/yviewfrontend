import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { HiOutlineShare } from "react-icons/hi";
function VideoDetails(data) {
  console.log(data);
  return (
    <section className="mt-2 text-white  h-auto p-3 w-full">
      <div className="">
        <p className="text-justify font-bold mb-5 font-sans  text-orange-300 ">
          {data.data?.title}
        </p>
        <span className="text-sky-300">Uplaoded By {data.data.uploadTime}</span>
   
      </div>
      <section className=" max-h-fit  overflow-hidden md:max-w-[97vw] md:w-full mt-2 md:mt-5 h-[20vh] md:h-[10vh]   md:px-[2vw] text-xs md:text-md    flex flex-col justify-around md:flex-row md:justify-between  md:items-center  rounded-md  bg-gradient-to-t from-slate-600 to-slate-500 ">
        
        <div className="max-w-screen  md:w-[70%] flex justify-between md:justify-around  px-1 md:text-base  ">
          <div className="h-[6vh] w-[40%] md:w-[20%] inline-flex   justify-between items-center">
            <span className="">{data.data.views} views..</span>
            <span>{data.data?.totalComments || "0"} Commetn..</span>
          </div>
          <div className="w-[40%] md:w-[35%] h-[6vh]   inline-flex   px-2 items-center justify-around">
            <div className="inline-flex items-center ">
              <span className="text-xl  md:text-2xl inline-flex items-center hover:text-xl duration-200 hover:text-blue-400 mx-1 md:mx-3">
                <SlLike />
              </span>
              <span>{"1k"}</span>
            </div>
            <div className="inline-flex items-center">
              <span className="text-xl md:text-2xl inline-flex items-center hover:text-xl duration-200 hover:text-blue-400 mx-1 md:mx-3">
                <SlDislike />
              </span>
              <span>{"2k"}</span>
            </div>
          </div>
        </div>

        <div className="md:w-[20%] h-[6vh]  inline-flex justify-around md:justify-evenly items-center ">
          <span className="text-lime-500 text-2xl">
            {" "}
            <HiOutlineShare />
          </span>
          <button className="w-fit md:w-[8vw]  px-5 py-2  rounded-md text-white md:px-2 md:py-2  text-sm bg-gradient-to-tl border-2 border-stone-600 from-stone-900 to-stone-800 ">
            Subscribe
          </button>
        </div>
      </section>
      <p className="text-lime-400 ">{data.data?.description}</p>
    </section>
  );
}

export default VideoDetails;
