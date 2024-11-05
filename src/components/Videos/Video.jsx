import React from "react";
import ChannelDetails from "../Channel/ChnlDetails.jsx";
import VideoDetails from "./VideoDetails.jsx";


const Video = ({id}) => {


  return (
  
      <div className="w-full h-full  overflow-hidden rounded-xl      grid grid-flow-row gap-y-4  md:px-0  xl:p-2   ">
        <VideoDetails/>
        <ChannelDetails/>
      </div>
  
  );
};

export default Video;
