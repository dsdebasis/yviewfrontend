import React from 'react'

const ChannelDetails = () => {
  return (
    <div className='w-full  h-[15vh]  box-border  flex flex-row justify-between items-center md:py-1 xl:py-3'>
      <div className='w-[20%] self-start'>
        <img src='https://images.pexels.com/photos/13755865/pexels-photo-13755865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className=' h-12 w-12 rounded-full md:h-16 md:w-16 xl:h-14 xl:w-14'></img>
      </div>
      <div className='w-[75%] h-full  box-border overflow-hidden'>
        <h1 className='text-slate-400 tracking-wide line-clamp-2 overflow-hidden text-base md:text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dele</h1>
        <h1 className='text-sm text-stone-300 md:text-xs'>Channel Name</h1> 
        <h1 className='text-violet-200  text-xs xl:text-base'>Video Details</h1>
      </div>
     
    </div>
  )
}

export default ChannelDetails
