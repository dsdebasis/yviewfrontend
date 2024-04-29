import React from 'react'
import ChannelImg from './ChannelImg'
import VideoFooter from './VideoFooter'

const ChannelDetails = () => {
  return (
    <div className=' w-full min-h-fit  box-border  flex flex-row justify-between items-center '>
      
      <ChannelImg url='https://images.pexels.com/photos/13755865/pexels-photo-13755865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
     
     <VideoFooter title={"How india is changing... many more updated are coming js is not easy for noob.india is becoming a dictator How india is changing... many more updated are coming js is not easy for noob.india is becoming a dictator"} chnlName={"Dhruv Rathe"} videoTime={"10days ago ,26 April 2023"} />
     
    </div>
  )
}

export default ChannelDetails
