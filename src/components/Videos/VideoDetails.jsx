import VideoLink from "./VideoLink";
import { Link } from "react-router-dom";

const VideoDetails = ({ src, vid, thumbnail, duration }) => {
  return (
    <div className=" h-[19vh] sm:h-[20vh] md:h-[20vh] lg:h-[28vh] xl:h-[30vh] row-span-2 bg-clip-padding hover:text-xs">
      <Link to={`/videoplayer/${vid}`} >
        <VideoLink
          link={src}
          vid={vid}
          thumbnail={thumbnail}
          duration={duration}
        />
      </Link>
      
    </div>
  );
};

export default VideoDetails;
