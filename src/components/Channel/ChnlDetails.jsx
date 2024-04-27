import React from 'react'
import ChannelImg from './ChannelImg'
import VideoFooter from './VideoFooter'

const ChannelDetails = () => {
  return (
    <div className='w-full  h-[15vh] overflow-hidden box-border  flex flex-row justify-between items-center md:py-1 '>
      
      <ChannelImg url='https://images.pexels.com/photos/13755865/pexels-photo-13755865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
     
     <VideoFooter title={"How india is changing..."} chnlName={"Dhruv Rathe"} videoTime={"10days ago ,26 April 2023"} />
     
    </div>
  )
}

export default ChannelDetails
