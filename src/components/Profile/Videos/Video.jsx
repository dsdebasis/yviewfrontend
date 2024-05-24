import React from 'react'
import ChannelDetails from '../../Channel/ChnlDetails.jsx'
import VideoDetails from './VideoDetails.jsx'


const Video = ({src}) => {

  return (
    <div className=' overflow-hidden rounded-xl w-full md:w-[90%]  lg:w-[95%]  grid grid-flow-row  gap-y-4  md:px-0 ' >
      
      <VideoDetails src={src}/>
      <ChannelDetails />
      
    </div>
  )
}

export default Video
