import React from 'react'
import ChannelDetails from '../Channel/ChnlDetails.jsx'
import VideoDetails from './VideoDetails.jsx'
const Video = ({title,uploadTime,src,vid,channelProfilePic,videoOwner}) => {
  console.log(videoOwner)
  return (
    <div className=' overflow-hidden rounded-xl w-full md:w-[90%]  lg:w-[95%]  grid grid-flow-row  gap-y-4  md:px-0 ' >
      <VideoDetails src={src} vid={vid}/>
      <ChannelDetails title={title} uploadTime={uploadTime} channelProfilePic={channelProfilePic} chnlName={videoOwner} />
    </div>
  )
}

export default Video
