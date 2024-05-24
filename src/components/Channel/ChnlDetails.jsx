import React from 'react'
import ChannelImg from './ChannelImg'
import VideoFooter from './VideoFooter'
import { CompContext } from '../../Context/Context.js'
import { useContext } from 'react'

const ChannelDetails = ({ profilePic,title,uploadTime }) => {
  const { data } = useContext(CompContext)

 
  return (
    <div className=' w-full min-h-fit  box-border  flex flex-row justify-between items-center '>

      <ChannelImg url={data?.profilePic} />

      <VideoFooter title={title} chnlName={data?.channelName} videoTime={uploadTime} />

    </div>
  )
}

export default ChannelDetails
