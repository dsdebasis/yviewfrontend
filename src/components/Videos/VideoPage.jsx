import React from 'react'
import { Link } from 'react-router-dom'
import TotalVideos from './TotalVideos.jsx'
const VideoPage = () => {
  return (

    <section className='h-auto w-full overflow-hidden border-2 box-border  text-white bg-gradient-to-br from-slate-600 to-slate-950'>
      <div className='h-16 rounded-lg flex justify-around items-center bg-gradient-to-tl'>
        <Link >Videos</Link>
        <Link>Posts</Link>
        <Link>comments</Link>
      </div>

     <TotalVideos/>
    </section>
  )
}

export default VideoPage
