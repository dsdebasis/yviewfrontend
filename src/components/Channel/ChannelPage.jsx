import React from 'react'
import ChannelHeading from './ChnlHeading.jsx'
import VideoPage from '../Videos/VideoPage.jsx'
import { useEffect } from "react"
import axios from "axios"
import { backendUrl } from "../index.js"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CompContext } from '../../Context/Context.js'

import { useContext } from 'react'
import Loading from '../Loading/Loading.jsx'

const ChannelPage = () => {

  const navigate = useNavigate()
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  const { data, setData, channelVideos, setChannelVideos } = useContext(CompContext)
  let { about, profilePic, channelName, createdAt, videos, subscribers } = data
  useEffect(() => {
    setLoading(true)
    axios.get(`${backendUrl}/getchannel`, {
      withCredentials: true
    }).then((res) => {
      res = res.data.data
      setChannelVideos(res.allVideos)
      res = res.userChannelDetails
      setData(res)
    }).catch((err) => {
      console.log("erorr", err.response.data.message)
      setError(err.response.data)

    }).finally(() => {
      setLoading(false)
    })

  }, [error])


  const { message } = error
  if (message) {
    navigate("/createchannel")

  }

  {
    loading ? <Loading /> : <></>

    return (
      <section className='min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5'>

        {/* <ChannelContextProvider> */}
          <ChannelHeading  />

          <VideoPage />
        {/* </ChannelContextProvider> */}


      </section>
    )
  }
}

export default ChannelPage
