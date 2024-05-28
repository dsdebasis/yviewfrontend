import React from 'react'

const VideoFooter = ({title,chnlName,videoTime}) => {
 
  
  return (
    <div className='w-[75%]   box-border overflow-hidden '>
        <h1 className=' overflow-hidden text-sm md:text-sm xl:text-base text '>{title}</h1>
        <h1 className='text-sm  md:text-base  capitalize text-indigo-300 font-mono'>{chnlName}</h1> 
        <h1 className='text-indigo-300   text-xs xl:text-base'>{videoTime}</h1>
      </div>
  )
}

export default VideoFooter
