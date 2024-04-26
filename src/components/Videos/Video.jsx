import React from 'react'
import ChannelDetails from '../Channel/ChnlDetails.jsx'
import VideoDetails from './VideoDetails.jsx'

const Video = () => {
  return (
    <div className='overflow-hidden rounded-xl h-[35vh] w-[90%] md:h-[48vh]  md:w-[23vw] grid grid-flow-row grid-rows-3 gap-y-2' >
      
      <VideoDetails/>
      <ChannelDetails/>
      
    </div>
  )
}

export default Video
