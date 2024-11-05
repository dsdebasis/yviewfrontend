import VideoLink from "./VideoLink";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { VideoContext } from "../../Context/useVideoContext";
const VideoDetails = () => {

  const data = useContext(VideoContext);
 
  return (
    <div className=" h-[19vh] sm:h-[20vh] md:h-[20vh] lg:h-[28vh] xl:h-[30vh] row-span-2 bg-clip-padding ">
      <Link to={`/videoplayer/${data._id}`} >
        <VideoLink
          link={data.src}
          vid={data._id}
          thumbnail={data.thumbnail}
          duration={data.duration}
        />
      </Link>
      
    </div>
  );
};

export default VideoDetails;
