import React from 'react'
import ChannelHeading from './ChnlHeading.jsx'
import VideoPage from '../Videos/VideoPage.jsx'
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import axios from "axios"
import { backendUrl } from "../index.js"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Error from '../Error/Error.jsx'
const ChannelPage = () => {

  const [channel, setChannel] = useState({})
  
  const navigate = useNavigate()

  const [error, setError] = useState({})
  
  useEffect(() => {
    axios.get(`${backendUrl}/getchannel`, {
      withCredentials: true
    }).then((res) => {
      res = res.data.data
      setChannel(res)
    }).catch((err) => {
      console.log("erorr", err.response.data.message)
      setError(err.response.data)
     
    })
  }, [])

  let { about, profilePic, channelName, createdAt, videos, subscribers } = channel

  const {message} = error
  if (message ) {
    navigate("/createchannel")
   
  }
  return (
    <section className='min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5'>
      <ChannelHeading channelName={channelName} about={about || ""} profilePic={profilePic || ""} createdAt={createdAt} subscribers={subscribers?.length} videos={videos?.length} />

      <VideoPage />
      <ToastContainer/>
    </section>
  )
}

export default ChannelPage
