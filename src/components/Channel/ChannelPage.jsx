import React from 'react'
import ChannelHeading from './ChnlHeading'
import VideoPage from '../Videos/VideoPage'
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import axios from "axios"
import { backendUrl } from "../index.js"
import { useState } from 'react'

const ChannelPage = () => {

  const [channel,setChannel] = useState({})

  useEffect(() => {
    axios.get(`${backendUrl}/getchannel`,{
    withCredentials: true
    }).then((res)=>{
      res = res.data.data.channel
      setChannel(res)
    
    }).catch((err)=>{
      console.log("erorr",err)
    })
  },[])

  const {about,profilePic,channelName, createdAt,videos,subscribers} = channel
  return (
    <section className='min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5'>
      <ChannelHeading channelName={channelName} about={about} profilePic={""} createdAt={createdAt} subscribers={subscribers?.length} videos={videos?.length}/>
      
      <VideoPage/>
    </section>
  )
}

export default ChannelPage
