import React from 'react'
import ChannelImg from './ChannelImg.jsx'
import VideoFooter from './VideoFooter.jsx'
import { CompContext } from '../../Context/Context.js'
import { useContext } from 'react'

const ChannelDetails = ({ channelProfilePic,title,uploadTime,chnlName,views }) => {
  const { data } = useContext(CompContext)

 
  return (
    <div className=' w-full h-full  box-border  flex flex-row justify-between items-center '>

      <ChannelImg url={channelProfilePic || data?.profilePic} />

      <VideoFooter title={title} chnlName={chnlName || data?.channelName} videoTime={uploadTime} views={views} />

    </div>
  )
}

export default ChannelDetails
