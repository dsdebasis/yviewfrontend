import { Link } from "react-router-dom"
const VideoDetails = () => {
  return (
    <div className=' h-[25vh] md:h-[22vh] lg:h-[40vh] overflow-hidden row-span-2 bg-clip-padding'>
      <Link to="/videoplayer">
        <img src="https://images.pexels.com/photos/5989139/pexels-photo-5989139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-full h-full rounded-2xl"></img>  
      </Link>
    </div>
  )
}

export default VideoDetails
