import React from "react";
import ChannelDetails from "../Channel/ChnlDetails.jsx";
import VideoDetails from "./VideoDetails.jsx";
const Video = ({
  title,
  uploadTime,
  src,
  vid,
  channelProfilePic,
  videoOwner,
  thumbnail,
  duration,
}) => {
  return (
    <div className="w-full h-full  overflow-hidden rounded-xl  md:w-[90%] xl:w-[97%]  lg:w-full  grid grid-flow-row gap-y-4  md:px-0  xl:p-2" >
      <VideoDetails
        src={src}
        vid={vid}
        thumbnail={thumbnail}
        duration={duration}
      />
      <ChannelDetails
        title={title}
        uploadTime={uploadTime}
        channelProfilePic={channelProfilePic}
        chnlName={videoOwner}
      />
    </div>
  );
};

export default Video;
