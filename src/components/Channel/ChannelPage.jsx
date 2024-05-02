import React from 'react'
import ChannelHeading from './ChnlHeading.jsx'
import VideoPage from '../Videos/VideoPage.jsx'
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import axios from "axios"
import { backendUrl } from "../index.js"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Error from '../Error/Error.jsx'
const ChannelPage = () => {


  const [channel, setChannel] = useState({
    
  })
  // about: "",
  //   profilePic: "", channelName: "", createdAt: "", videos: "", subscribers: ""

  const [error, setError] = useState({})
  
  useEffect(() => {
    axios.get(`${backendUrl}/getchannel`, {
      withCredentials: true
    }).then((res) => {
      res = res.data.data.channel
      // console.log(res)
      setChannel(res)

    }).catch((err) => {
      console.log("erorr", err.response.data.message)
      setError(err.response.data)
      // toast.erorr(err.response.data.message)
    })
  }, [])

  const { about, profilePic, channelName, createdAt, videos, subscribers } = channel
  // console.log(about)

  const {message} = error
  if (message ) {
    // console.log("ds",message)
    return <Error message={"no channel found"}/>
  }
  return (
    <section className='min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5'>
      <ChannelHeading channelName={channelName} about={about || ""} profilePic={profilePic || ""} createdAt={createdAt} subscribers={subscribers?.length} videos={videos?.length} />

      <VideoPage />
    </section>
  )
}

export default ChannelPage
