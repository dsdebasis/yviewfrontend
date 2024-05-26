import React from 'react'

const VideoFooter = ({title,chnlName,videoTime}) => {
  // console.log(title)
  
  return (
    <div className='w-[75%]   box-border overflow-hidden'>
        <h1 className=' text-violet-200 leading-5 line-clamp-2 overflow-hidden text-sm md:text-sm xl:text-base font-bold'>{title}</h1>
        <h1 className='text-sm  md:text-base capitalize  '>{chnlName}</h1> 
        <h1 className='text-white  text-xs xl:text-base'>{videoTime}</h1>
      </div>
  )
}

export default VideoFooter
