import React from 'react'
import Vplay from "../VideoPlayer/Vplay.jsx"
function VideoLink({  link ,vid,thumbnail}) {
  return (

    <div className='w-full h-full box-border '>
      <img src={thumbnail || "https://images.pexels.com/photos/5989139/pexels-photo-5989139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className="w-full h-full rounded-2xl object-cover  "  onClick={function(vid){
        
        localStorage.setItem("link",link)
        localStorage.setItem("vId",vid)
       { <Vplay link={link}/>}
      }}></img>
     
    </div>

  )
}

export default VideoLink
