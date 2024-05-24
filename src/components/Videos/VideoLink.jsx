import React from 'react'
import Vplay from "../VideoPlayer/Vplay.jsx"
function VideoLink({ thumbnail, link }) {
  // console.log("link",link)
  return (

    <div className='w-full h-full '>
      <img src={"https://images.pexels.com/photos/5989139/pexels-photo-5989139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className="w-full h-full rounded-2xl"></img>
      <Vplay link={link}/>
    </div>

  )
}

export default VideoLink
