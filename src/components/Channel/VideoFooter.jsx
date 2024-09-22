import React from "react";

const VideoFooter = ({ title, chnlName, videoTime,views  }) => {
  return (
    <div className="w-[75%] h-full box-border overflow-hidden flex flex-col hover:text-xs">
      <p className=" overflow-hidden text-sm md:text-sm text-wrap  font-mono font-semibold ">
        {title}
      </p>

      <div className="inline-flex items-center justify-between">
        <h1 className="text-sm  font-extrabold   capitalize bg-gradient-to-b from-amber-700 via-amber-300 to-blue-500 bg-clip-text text-transparent">
          {chnlName}
        </h1>
        <p className="text-cyan-500   text-xs ">{videoTime}</p>
      </div>
      <h1 className=' '>{views || 0} views</h1>
    </div>
  );
};

export default VideoFooter;
