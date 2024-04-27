import React from 'react'

const VideoFooter = ({title,chnlName,videoTime}) => {
  return (
    <div className='w-[75%] h-full  box-border overflow-hidden'>
        <h1 className='text-slate-400 tracking-wide line-clamp-2 overflow-hidden text-base md:text-sm xl:text-base'>{title}</h1>
        <h1 className='text-sm text-stone-300 md:text-xs'>{chnlName}</h1> 
        <h1 className='text-violet-200  text-xs xl:text-base'>{videoTime}</h1>
      </div>
  )
}

export default VideoFooter
