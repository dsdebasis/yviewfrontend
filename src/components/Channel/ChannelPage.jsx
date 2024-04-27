import React from 'react'
import ChannelHeading from './ChnlHeading'
import VideoPage from '../Videos/VideoPage'
import { Link } from 'react-router-dom'

const ChannelPage = () => {
  return (
    <section className='min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 grid grid-flow-row  px-5'>
      <ChannelHeading />
      
      <VideoPage/>
    </section>
  )
}

export default ChannelPage
