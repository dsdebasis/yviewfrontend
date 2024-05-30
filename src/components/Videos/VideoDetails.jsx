import VideoLink from "./VideoLink"
import { Link } from "react-router-dom"

const VideoDetails = ({src,vid,thumbnail}) => {

  return (
    <div className=' h-[25vh] md:h-[22vh] lg:h-[200px] overflow-hidden row-span-2 bg-clip-padding'>
      <Link to="/videoplayer" >
        <VideoLink link={src} vid={vid} thumbnail={thumbnail}/>
      </Link>
    </div>
  )
}

export default VideoDetails
