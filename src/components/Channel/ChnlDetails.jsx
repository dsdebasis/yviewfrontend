import React from 'react'
import ChannelImg from './ChannelImg'
import VideoFooter from './VideoFooter'
import { CompContext } from '../../Context/Context.js'
import { useContext } from 'react'
const ChannelDetails = ({ profilePic }) => {
  const { data } = useContext(CompContext)
  // console.log("data",data)
  return (
    <div className=' w-full min-h-fit  box-border  flex flex-row justify-between items-center '>

      <ChannelImg url={data?.profilePic} />

      <VideoFooter title={""} chnlName={data?.channelName} videoTime={"10days ago ,26 April 2023"} />

    </div>
  )
}

export default ChannelDetails
