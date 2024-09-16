import React from 'react'

const VideoFooter = ({title,chnlName,videoTime}) => {
 
  
  return (
    <div className='w-[75%]   box-border overflow-hidden '>
        <h1 className=' overflow-hidden text-sm md:text-sm xl:text-base text '>{title}</h1>
        <h1 className='text-sm font-extrabold    capitalize bg-gradient-to-br from-amber-700 via-amber-300 to-gray-800 bg-clip-text text-transparent'>{chnlName}</h1> 
        <h1 className='text-indigo-300   text-xs xl:text-base'>{videoTime}</h1>
      </div>
  )
}

export default VideoFooter
