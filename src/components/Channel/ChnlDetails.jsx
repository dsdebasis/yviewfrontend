import React from 'react'
import ChannelImg from './ChannelImg.jsx'
import VideoFooter from './VideoFooter.jsx'
import { VideoContext } from '../../Context/useVideoContext.js'
import { useContext } from 'react'

const ChannelDetails = () => {
  const  data  = useContext(VideoContext)
  
    
  return (
    <div className='mt-2 w-full h-full  box-border  flex flex-row justify-between items-center '>

      <ChannelImg url={data.channelProfilePic || data?.profilePic} />

      <VideoFooter title={data.title} chnlName={data.ownerName || data?.channelName} videoTime={data.uploadTime} views={data.views} />

    </div>
  )
}

export default ChannelDetails
