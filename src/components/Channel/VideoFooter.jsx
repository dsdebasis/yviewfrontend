import React from "react";

const VideoFooter = ({ title, chnlName, videoTime, views }) => {
  return (
    <div className=" w-[83%] h-full box-border overflow-hidden flex flex-col ">
      <p className=" overflow-hidden text-sm md:text-sm text-wrap font-semibold ">
        {title}
      </p>

      <div className="inline-flex items-center justify-between">
        <h1 className="text-sm  font-extrabold   capitalize bg-gradient-to-b from-amber-700 via-amber-300 to-blue-500 bg-clip-text text-transparent">
          {chnlName}
        </h1>
      </div>
      <div className="flex justify-between items-center ">
        <span className=" inline-block">{views || 0} views</span>
        <span className="inline-block text-cyan-500   text-xs mr-6 md:mr-4">{videoTime}</span>
      </div>
    </div>
  );
};

export default VideoFooter;
