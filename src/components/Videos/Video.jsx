import React from 'react'
import ChannelDetails from '../Channel/ChnlDetails.jsx'
import VideoDetails from './VideoDetails.jsx'


const Video = () => {

  return (
    <div className=' overflow-hidden rounded-xl h-[40vh] w-[90%]  grid grid-flow-row  gap-y-2 xl:gap-y-4 xl:h-[40vh] xl:w-[22vw]' >
      
      <VideoDetails/>
      <ChannelDetails/>
      
    </div>
  )
}

export default Video
