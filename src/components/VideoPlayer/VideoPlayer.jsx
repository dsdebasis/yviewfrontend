
import "video.js/dist/video-js.css";

import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({videoUri}) => {
  
  return (
 
      <ReactPlayer url={videoUri} playing={true} controls={true} playbackRate={1} pip={true}  volume={1} className=" h-[25vh] max-w-[98%] box-border mx-auto rounded-lg  md:h-[30vh] md:w-[80vw] mt-2 lg:h-[40vh] lg:w-[50vw] xl:h-[50vh] lg:rounded-2xl  overflow-hidden mb-5 border-2 border-stone-700 "/>

  );
};


export default VideoPlayer;
