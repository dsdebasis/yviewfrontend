import VideoLink from "./VideoLink";
import { Link } from "react-router-dom";

const VideoDetails = ({ src, vid, thumbnail, duration }) => {
  return (
    <div className=" h-[25vh] md:h-[22vh] lg:h-[200px] row-span-2 bg-clip-padding">
      <Link to={`/videoplayer/${vid}`}>
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
