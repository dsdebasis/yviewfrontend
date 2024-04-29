import React from 'react'
import ChannelDetails from '../Channel/ChnlDetails.jsx'
import VideoDetails from './VideoDetails.jsx'


const Video = () => {

  return (
    <div className=' overflow-hidden rounded-xl w-full md:w-[90%] lg:w-[90%]  grid grid-flow-row  gap-y-4  md:px-0 ' >
      
      <VideoDetails/>
      <ChannelDetails/>
      
    </div>
  )
}

export default Video